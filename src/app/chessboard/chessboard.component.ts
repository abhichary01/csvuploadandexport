import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent {
  @Input()
  possibleMoves!: number[][];
  board: any[][] = Array(8).fill(null).map(() => Array(8).fill(null));
}
