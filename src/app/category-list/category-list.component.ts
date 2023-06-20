import { Component, OnInit } from '@angular/core';
import { CategoryHandler } from '../handler/category-handler';
import { Category } from '../model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories!: Category[];

  ngOnInit(): void {
    this.categories = CategoryHandler.getAll(true);
  }

  onDeleteClick(category: Category) {
    if (confirm(`Deseja realmente excluir a categoria ${category.description}?`)) {
      CategoryHandler.delete(category.id);
      this.categories = CategoryHandler.getAll(true);
    }
  }
}
