import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-exportdata',
  templateUrl: './exportdata.component.html',
  styleUrls: ['./exportdata.component.css']
})
export class ExportdataComponent {
  books: any;
  searchParams = {
    authors: '',
    isbn: ''
  };
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  async search() {
    this.books = await this.http.get(`http://localhost:3000/getbooks/query?authors=${this.searchParams.authors}&isbn=${this.searchParams.isbn}`).toPromise();
  }
  convertToCSV(jsonData: any) {
    const csv = Papa.unparse(jsonData);
    return csv;
  }
  downloadFile(data: any) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.csv';
    link.click();
  }
  
}
