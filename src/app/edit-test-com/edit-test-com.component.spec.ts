import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestComComponent } from './edit-test-com.component';

describe('EditTestComComponent', () => {
  let component: EditTestComComponent;
  let fixture: ComponentFixture<EditTestComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTestComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
