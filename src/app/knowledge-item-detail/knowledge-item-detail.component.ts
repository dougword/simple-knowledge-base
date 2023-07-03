import { Component } from '@angular/core';
import { Knowledge } from '../model/knowledge';
import { ActivatedRoute } from '@angular/router';
import { KnowledgeService } from '../service/knowledge.service';
import { MessageUtil } from '../util/message-util';

@Component({
  selector: 'app-knowledge-item-detail',
  templateUrl: './knowledge-item-detail.component.html',
  styleUrls: ['./knowledge-item-detail.component.css']
})
export class KnowledgeItemDetailComponent {
  knowledge!: Knowledge;

  constructor(
    private route: ActivatedRoute,
    private knowledgeService: KnowledgeService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id) {
      this.knowledgeService.getById(+id).subscribe(
        (knowledge: Knowledge) => {
          this.knowledge = knowledge;
        },
        (error: Error) => {
          MessageUtil.showErrorMessage('Falha ao carregar registro!', error);
        }
      );
    }
  }
}
