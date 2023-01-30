import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-csvfiles',
  templateUrl: './csvfiles.component.html',
  styleUrls: ['./csvfiles.component.css']
})
export class CsvfilesComponent {
  fileData: File | any = null;
  previewUrl: any = null;
  uploadedFilePath: string | any = null;
  data:  any;

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


  onSubmitUpload() {
    console.log("vvv",environment.BASE_URL)
    const formData = new FormData();
    formData.append('csvFile', this.fileData);
    this.http.post <Doco>(environment.BASE_URL+'/upload', formData)
      .subscribe((resp: { filename: any; }) => {
        this.uploadedFilePath =  resp.filename;
        alert('SUCCESS !!');
      }
      ,(err)=>{
        alert ("Action failed")
      });
  }

  async getData() {
    this.data = await this.http.get(environment.BASE_URL+'/getallbooks').toPromise();
    }
    catch (error: any) {
    console.error(error);
    };
}
export interface Doco {
  filename: string;
  size: number;
  private: boolean;
}
