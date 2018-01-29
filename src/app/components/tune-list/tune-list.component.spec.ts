import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuneListComponent } from './tune-list.component';

describe('TuneListComponent', () => {
  let component: TuneListComponent;
  let fixture: ComponentFixture<TuneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
