import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { ReactiveFormsModule, FormsModule } from '../../../../../../node_modules/@angular/forms';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ReactiveFormsModule,FormsModule],
      declarations: [ TodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
