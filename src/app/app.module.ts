import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { KnightmoveComponent } from './knightmove/knightmove.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ChessboardComponent } from './chessboard/chessboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { ExportdataComponent } from './exportdata/exportdata.component';
import { CsvfilesComponent } from './csvfiles/csvfiles.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'knight', component: KnightmoveComponent },
  { path: 'chessboard', component: ChessboardComponent },
  { path: 'csv', component: CsvfilesComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'export', component: ExportdataComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    KnightmoveComponent,
    ChessboardComponent,
    NavbarComponent,
    ExportdataComponent,
    CsvfilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
