import { CategoryService } from './../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories!: Category[];

  constructor(private categoryService: CategoryService) {}

  loadList() {
    this.categoryService
      .getAll()
      .then((items: Category[]) => (this.categories = items))
      .catch((error) => console.log(error));
  }

  ngOnInit(): void {
    this.loadList();
  }

  onDeleteClick(category: Category) {
    if (
      confirm(`Deseja realmente excluir a categoria ${category.description}?`)
    ) {
      this.categoryService
        .delete(category.id)
        .then((_) => this.loadList())
        .catch((error) => {
          alert('Não foi possível excluir a categoria');
          console.log(error);
        });
    }
  }
}
