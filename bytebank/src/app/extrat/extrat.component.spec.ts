import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratComponent } from './extrat.component';

describe('ExtratComponent', () => {
  let component: ExtratComponent;
  let fixture: ComponentFixture<ExtratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
