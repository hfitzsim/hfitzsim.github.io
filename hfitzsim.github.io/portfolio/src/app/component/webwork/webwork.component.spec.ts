import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebworkComponent } from './webwork.component';

describe('WebworkComponent', () => {
  let component: WebworkComponent;
  let fixture: ComponentFixture<WebworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
