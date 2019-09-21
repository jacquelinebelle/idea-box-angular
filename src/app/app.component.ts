import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Idea Box';
  ideas = [];

  addIdea(idea) {
    this.ideas = [{ id: this.ideas.length, ...idea }, ...this.ideas];
    return this.ideas;
  }

  execOnClose($event: any) {
    this.addIdea($event);
  }

}
