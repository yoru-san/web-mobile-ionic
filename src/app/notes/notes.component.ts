import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {

  public note: string;
  @Output() noteEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  addNote() {
    console.log(this.note);
    if (this.note !== "") {
      this.noteEvent.emit(this.note);
    }
  }
}
