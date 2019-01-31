import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailParComComponent } from './detail-par-com.component';

describe('DetailParComComponent', () => {
  let component: DetailParComComponent;
  let fixture: ComponentFixture<DetailParComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailParComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailParComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
