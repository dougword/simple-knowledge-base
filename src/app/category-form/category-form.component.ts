import { CategoryService } from './../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {
  category: Category = new Category(0, '', '');
  title: string = 'Incluir Categoria';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id) {
      this.categoryService.getById(+id).then((category: Category) => {
        this.category = category;
        this.title = 'Editar Categoria';
      });
    }
  }

  onSubmit() {
    if (this.category.description.trim().length < 3) {
      alert('A categoria precisa ter pelo menos 3 caracteres');
      return;
    }
    if (this.category.id == 0) {
      this.categoryService.insert(this.category);
    } else {
      this.categoryService.update(this.category);
    }
    this.router.navigate(['/category']);
  }
}
