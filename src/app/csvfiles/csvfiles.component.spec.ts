import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvfilesComponent } from './csvfiles.component';

describe('CsvfilesComponent', () => {
  let component: CsvfilesComponent;
  let fixture: ComponentFixture<CsvfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
