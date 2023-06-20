import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as M from 'materialize-css';
import { Category } from '../model/category';
import { CategoryHandler } from '../handler/category-handler';
import { Knowledge } from '../model/knowledge';
import { KnowledgeHandler } from '../handler/knowledge-handler';

@Component({
  selector: 'app-knowledge-list',
  templateUrl: './knowledge-list.component.html',
  styleUrls: ['./knowledge-list.component.css']
})
export class KnowledgeListComponent implements OnInit, AfterViewInit {
  categories!: Category[];
  knowledges!: Knowledge[];

  ngOnInit(): void {
    this.categories = CategoryHandler.getAll();
    this.knowledges = KnowledgeHandler.getAll();
  }
  
  ngAfterViewInit(): void {
    M.FormSelect.init(document.querySelectorAll('select'));
  }

  onCategorySelect(event: Event) {
    let categoryId = +(event.target as HTMLInputElement).value;
    if (categoryId) {
      this.knowledges = KnowledgeHandler.getAll().filter(k => k.category.id == categoryId);
    } else {
      this.knowledges = KnowledgeHandler.getAll();
    }
  }
}
