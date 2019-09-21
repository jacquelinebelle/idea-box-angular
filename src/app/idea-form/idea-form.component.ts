import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  @Input() description: string;
  @Output() addIdea = new EventEmitter();

  ngOnInit() {

  }
  
  IdeaForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  onSubmit() {
    this.addIdea.emit(this.IdeaForm.value);
    this.IdeaForm.reset();
  }
}
