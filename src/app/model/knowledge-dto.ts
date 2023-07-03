import { Knowledge } from './knowledge';

export class KnowledgeDTO {
  id;
  title;
  categoryId;
  text;
  createdAt;

  constructor(knowledge: Knowledge) {
    this.id = knowledge.id;
    this.title = knowledge.title;
    this.categoryId = knowledge.category.id;
    this.text = knowledge.text;
    this.createdAt = knowledge.createdAt;
  }
}
