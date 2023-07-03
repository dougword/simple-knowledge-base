import { Component, OnInit } from '@angular/core';
import { Knowledge } from '../model/knowledge';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { KnowledgeService } from '../service/knowledge.service';
import { MessageUtil } from '../util/message-util';

@Component({
  selector: 'app-knowledge-form',
  templateUrl: './knowledge-form.component.html',
  styleUrls: ['./knowledge-form.component.css'],
})
export class KnowledgeFormComponent implements OnInit {
  categories!: Category[];
  formTitle = 'Incluir Conhecimento';
  knowledge: Knowledge = new Knowledge(
    0,
    '',
    new Category(0, '', ''),
    '',
    new Date()
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private knowledgeService: KnowledgeService
  ) {}

  onSubmit() {
    if (this.knowledge.title.trim().length < 3) {
      MessageUtil.showToastError(
        'O título do conhecimento precisa ter pelo menos 3 caracteres'
      );
      return;
    }
    if (this.knowledge.text.trim().length < 3) {
      MessageUtil.showToastError(
        'O texto do conhecimento precisa ter pelo menos 3 caracteres'
      );
      return;
    }
    if (this.knowledge.id == 0) {
      this.knowledgeService.insert(this.knowledge).subscribe(
        (knowledge: Knowledge) => {
          this.router.navigate(['/knowledge']);
        },
        (error: Error) => {
          MessageUtil.showErrorMessage('Falha ao inserir!', error);
        }
      );
    } else {
      this.knowledgeService.update(this.knowledge).subscribe(
        (knowledge: Knowledge) => {
          this.router.navigate(['/knowledge']);
        },
        (error: Error) => {
          MessageUtil.showErrorMessage('Falha ao atualizar!', error);
        }
      );
    }
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id) {
      this.knowledgeService.getById(+id).subscribe(
        (knowledge: Knowledge) => {
          this.knowledge = knowledge;
          this.formTitle = 'Editar Conhecimento';
        },
        (error: Error) => {
          MessageUtil.showErrorMessage('Falha ao carregar registro!', error);
        }
      );
    }
  }

  ngAfterViewInit(): void {
    this.categoryService.getAll().then(
      (items: Category[]) => {
        this.categories = items;
        if (this.categories.length > 0)
          this.knowledge.category = this.categories[0];
        setTimeout(() => {
          this.initializeFormSelect();
        }, 50);
      },
      (error: Error) => {
        MessageUtil.showErrorMessage('Falha ao carregar categorias!', error);
      }
    );
  }

  initializeFormSelect() {
    M.FormSelect.init(document.querySelectorAll('select'));
  }
}
