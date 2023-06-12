import { Component, OnInit } from '@angular/core';
import { CategoryFake } from '../fake/category-fake';
import { Category } from '../model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories!: Category[];

  ngOnInit(): void {
    this.categories = CategoryFake.list;
  }

  onDeleteClick(category: Category) {
    alert('Não implementado')
  }
}
