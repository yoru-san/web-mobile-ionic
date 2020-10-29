import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {

  public notes: string[] = [];

  constructor() { }

  ngOnInit() {

  }

  add(note: string) {
    console.log('pouet ' + note);
    
    if (note !== "") {
      this.notes.push(note);
    }
  }
}
