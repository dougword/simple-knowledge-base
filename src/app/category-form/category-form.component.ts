import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryHandler } from '../handler/category-handler';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {
  category!: Category;
  title: string = 'Incluir Categoria';

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id) {
      let foundCategory = CategoryHandler.getById(+id);
      if (foundCategory) {
        this.category = foundCategory;
        this.title = 'Editar Categoria';
      } else {
        this.category = new Category(0, '');
      }
    }
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  save() {
    if (this.category.description.trim().length < 3) {
      alert('A categoria precisa ter pelo menos 3 caracteres');
      return;
    }
    if (this.category.id == 0) {
      CategoryHandler.insert(this.category);
    } else {
      CategoryHandler.update(this.category);
    }
    this.router.navigate(['/category']);
  }
}
