import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailParAdminComponent } from './detail-par-admin.component';

describe('DetailParAdminComponent', () => {
  let component: DetailParAdminComponent;
  let fixture: ComponentFixture<DetailParAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailParAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailParAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
