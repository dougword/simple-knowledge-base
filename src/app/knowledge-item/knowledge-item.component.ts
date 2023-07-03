import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Knowledge } from '../model/knowledge';

@Component({
  selector: 'app-knowledge-item',
  templateUrl: './knowledge-item.component.html',
  styleUrls: ['./knowledge-item.component.css']
})
export class KnowledgeItemComponent {

  @Input() knowledge!: Knowledge;
  @Output() deleteClick = new EventEmitter<Knowledge>();

  onDeleteClick() {
    this.deleteClick.emit(this.knowledge);
  }

}
