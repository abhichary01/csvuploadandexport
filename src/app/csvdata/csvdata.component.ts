import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as Json2csv from 'json2csv';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-csvdata',
  templateUrl: './csvdata.component.html',
  styleUrls: ['./csvdata.component.css']
})
export class CsvdataComponent {
  fileData: File | any = null;
  previewUrl: any = null;
  uploadedFilePath: string | any = null;
  data:  any;
  books: any;
  searchParams = {
    authors: '',
    isbn: ''
  };
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getData()
  }

  fileProgress(fileInput: any) {
    this.fileData  =  fileInput.target.files[0]  as File;
    this.preview();
  }

  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match('text'||'CSV') == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }

  onImageChange(event: any) {
    if (event.target.value.length !== 0) {
      this.fileData = event.target.files[0];
      let reader = new FileReader();
      const context = this;
      reader.readAsDataURL(this.fileData);
      reader.onload = function () {
        context.fileData = reader.result;
      };
      reader.onerror = function (error) { };
    }
  }

  onSubmitUpload() {
    const formData = new FormData();
    formData.append('csvFile', this.fileData);
    this.http.post <Doco>('http://localhost:3000/upload', formData)
      .subscribe((resp: { filename: any; }) => {
        this.uploadedFilePath =  resp.filename;
        alert('SUCCESS !!');
      }
      ,(err)=>{
        alert ("Action failed")
      });
  }

  onSubmitDownload(parameter: string | string[], value: string) {
    this.http.get (`http://localhost:3000/getbooks/query?${parameter}=${value}&export=yes`,  { responseType: 'blob' })
      .subscribe((response: any) => {
        console.log("response",response)
        const dataType = response.type;
        const binaryData = [];
        binaryData.push(response);
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
        if (value) {
          downloadLink.setAttribute('download', value);
        }
        document.body.appendChild(downloadLink);
        downloadLink.click();
      });
  }
  async getData() {
    this.data = await this.http.get('http://localhost:3000/getallbooks').toPromise();
  }
  search() {
    this.http.get(`http://localhost:3000/getbooks/query?authors=${this.searchParams.authors}&isbn=${this.searchParams.isbn}`)
      .subscribe(data => {
        this.books = data;
      });
  }
 
}

export interface Doco {
  filename: string;
  size: number;
  private: boolean;
}
