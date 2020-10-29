import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss'],
})
export class DisplayNotesComponent implements OnInit {

  @Input() noteEvent = new EventEmitter<string>();

  public notes: string[] = [];

  constructor() { }

  ngOnInit() { }

  addNoteToDisplay(note: string) {
    console.log('pouet ' + note);
    
    if (note !== "") {
      this.notes.push(note);
    }
  }
}
