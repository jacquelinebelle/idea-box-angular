import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent {

  constructor() { }

  ngOnInit() {
  }
  title = new FormControl('');
  description = new FormControl('');

}
