import { Component, Input } from '@angular/core';
import { Knowledge } from '../model/knowledge';

@Component({
  selector: 'app-knowledge-item',
  templateUrl: './knowledge-item.component.html',
  styleUrls: ['./knowledge-item.component.css']
})
export class KnowledgeItemComponent {

  @Input() knowledge!: Knowledge;

}
