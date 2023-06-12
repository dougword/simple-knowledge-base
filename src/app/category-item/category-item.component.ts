import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { ActivatedRoute } from '@angular/router';
import { CategoryFake } from '../fake/category-fake';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  category!: Category;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id) {
      let foundCategory = CategoryFake.list.find((c) => c.id == id);
      if (foundCategory) {
        this.category = new Category(
          foundCategory.id,
          foundCategory.description
        );
      } else {
        this.category = new Category(0, '');
      }
    }
  }

}
