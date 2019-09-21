import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent {

  constructor() { }

  ngOnInit() {
  }
  IdeaForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });
}
