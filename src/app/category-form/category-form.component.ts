import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryFake } from '../fake/category-fake';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {
  category!: Category;
  title: string = 'Inlcuir Categoria';

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id) {
      let foundCategory = CategoryFake.list.find((c) => c.id == id);
      if (foundCategory) {
        this.category = new Category(
          foundCategory.id,
          foundCategory.description
        );
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
    let foundCategory = CategoryFake.list.find((c) => c.id == this.category.id);
    if (foundCategory) {
      foundCategory.description = this.category.description;
      this.router.navigate(['/category']);
    } else {
      alert('Falha ao editar');
    }
  }
}
