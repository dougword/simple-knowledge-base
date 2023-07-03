import { CategoryService } from './../service/category.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as M from 'materialize-css';
import { Category } from '../model/category';
import { Knowledge } from '../model/knowledge';
import { KnowledgeService } from '../service/knowledge.service';
import { MessageUtil } from '../util/message-util';

@Component({
  selector: 'app-knowledge-list',
  templateUrl: './knowledge-list.component.html',
  styleUrls: ['./knowledge-list.component.css'],
})
export class KnowledgeListComponent implements OnInit, AfterViewInit {
  categories!: Category[];
  knowledges!: Knowledge[];

  constructor(
    private categoryService: CategoryService,
    private knowledgeService: KnowledgeService
  ) {}

  loadList() {
    this.knowledgeService.getAll().subscribe(
      (items: Knowledge[]) => {
        this.knowledges = items;
      },
      (error: Error) => {
        MessageUtil.showToastError(error.message);
      }
    );
  }

  ngOnInit(): void {
    this.loadList();
  }

  ngAfterViewInit(): void {
    this.categoryService.getAll().then(
      (items: Category[]) => {
        this.categories = items;
        setTimeout(() => {
          this.initializeFormSelect();
        }, 50);
      },
      (error) =>
        MessageUtil.showErrorMessage('Falha ao carregar categorias', error)
    );
  }

  initializeFormSelect() {
    M.FormSelect.init(document.querySelectorAll('select'));
  }

  onCategorySelect(event: Event) {
    let categoryId = +(event.target as HTMLInputElement).value;
    if (categoryId) {
      this.knowledgeService.getByCategoryId(categoryId).subscribe(
        (items: Knowledge[]) => {
          this.knowledges = items;
        },
        (error) => MessageUtil.showToastError(error.message)
      );
    } else {
      this.loadList();
    }
  }

  onDeleteClick(knowledge: Knowledge) {
    if (
      confirm(`Deseja realmente excluir o conhecimento ${knowledge.title}?`)
    ) {
      this.knowledgeService
        .delete(knowledge.id)
        .subscribe((_) => this.loadList());
    }
  }
}
