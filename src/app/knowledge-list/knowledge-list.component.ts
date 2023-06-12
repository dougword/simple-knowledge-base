import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as M from 'materialize-css';
import { Category } from '../model/category';
import { CategoryFake } from '../fake/category-fake';
import { KnowledgeFake } from '../fake/knowledge-fake';
import { Knowledge } from '../model/knowledge';

@Component({
  selector: 'app-knowledge-list',
  templateUrl: './knowledge-list.component.html',
  styleUrls: ['./knowledge-list.component.css']
})
export class KnowledgeListComponent implements OnInit, AfterViewInit {
  categories!: Category[];
  knowledges!: Knowledge[];

  ngOnInit(): void {
    this.categories = CategoryFake.list;
    this.knowledges = KnowledgeFake.list;
  }
  
  ngAfterViewInit(): void {
    M.FormSelect.init(document.querySelectorAll('select'));
  }

  onCategorySelect(event: Event) {
    let categoryId = +(event.target as HTMLInputElement).value;
    if (categoryId) {
      this.knowledges = KnowledgeFake.list.filter(k => k.category.id == categoryId);
    } else {
      this.knowledges = KnowledgeFake.list;
    }
  }
}
