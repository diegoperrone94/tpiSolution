import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  public form: FormGroup | null = null;

  constructor(
    private _controlContainer: ControlContainer,
    //private _fb : FormBuilder
  ) {}

  ngOnInit() {
    this.form = this._controlContainer.control as FormGroup;
/*     this.form = this._fb.group({
      todo : ['',Validators.required]
    }) */
  }
}