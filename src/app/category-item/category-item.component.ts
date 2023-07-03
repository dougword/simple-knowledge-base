import { CategoryService } from './../service/category.service';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css'],
})
export class CategoryItemComponent implements OnInit {
  category!: Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id) {
      this.category = new Category(0, '', '');
      this.categoryService
        .getById(+id)
        .then((category: Category) => (this.category = category))
        .catch((e) => alert('Categoria não encontrada'));
    }
  }
}
