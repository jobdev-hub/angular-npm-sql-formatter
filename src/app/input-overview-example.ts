import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { format } from 'sql-formatter';

@Component({
  selector: 'input-overview-example',
  styleUrls: ['input-overview-example.css'],
  templateUrl: 'input-overview-example.html',
})
export class InputOverviewExample {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formulario = this.formBuilder.group({
      script: '',
    });
  }

  formatar() {
    this.formulario.setValue({
      script: format(this.formulario.value.script),
    });
  }
}
