import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTestComComponent } from './insert-test-com.component';

describe('InsertTestComComponent', () => {
  let component: InsertTestComComponent;
  let fixture: ComponentFixture<InsertTestComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertTestComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertTestComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
