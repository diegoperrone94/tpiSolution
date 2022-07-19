import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoFormComponent } from './todo-form.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormGroupDirective, ControlContainer, FormControl } from '../../../../../../node_modules/@angular/forms';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let fg : FormGroup = new FormGroup({
    'todo' : new FormControl
  });
  const fgd: FormGroupDirective = new FormGroupDirective([],[]);
  fgd.form = fg;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [FormsModule, ReactiveFormsModule],
      declarations: [ TodoFormComponent ],
      providers : [ 
        { provide: ControlContainer, useValue : fgd}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
