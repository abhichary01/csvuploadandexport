import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightmoveComponent } from './knightmove.component';

describe('KnightmoveComponent', () => {
  let component: KnightmoveComponent;
  let fixture: ComponentFixture<KnightmoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnightmoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnightmoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
