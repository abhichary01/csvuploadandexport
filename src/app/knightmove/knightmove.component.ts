import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-knightmove',
  templateUrl: './knightmove.component.html',
  styleUrls: ['./knightmove.component.css']
})
export class KnightmoveComponent implements OnInit {
  x = 0;
  y = 0;
  moves = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getMoves() {
    if(this.x>8 || this.y>8){
      alert('please enter values less than or equal to 8');
    }else{
      this.http
      .post(environment.BASE_URL+'/knight/moves', { x: this.x, y: this.y })
      .subscribe((response: any) => {
        this.moves = response;
      });
    }
  }
}
