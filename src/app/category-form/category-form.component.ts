import { Component } from '@angular/core';
import { Category } from '../model/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  category: Category;

  constructor() {
    this.category = new Category('');
  }

  save() {
    alert('Categoria: ' + this.category.description)
  }
}
