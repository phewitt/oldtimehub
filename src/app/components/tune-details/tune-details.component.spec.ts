import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuneDetailsComponent } from './tune-details.component';

describe('TuneDetailsComponent', () => {
  let component: TuneDetailsComponent;
  let fixture: ComponentFixture<TuneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuneDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
