import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {

  public note: string;
  @Output() display = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() { }

  addNote() {
    console.log(this.note);
    if (this.note !== "") {
      this.display.emit(this.note);
    }
  }
}
