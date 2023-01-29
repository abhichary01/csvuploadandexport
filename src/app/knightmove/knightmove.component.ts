import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
    this.http
      .post('http://localhost:3000/knight/moves', { x: this.x, y: this.y })
      .subscribe((response: any) => {
        this.moves = response;
      });
  }
}
