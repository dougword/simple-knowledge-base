import { Category } from './category';

export class Knowledge {
  id: number = 0;
  title: string = '';
  category: Category = new Category(0, '');
  text: string = '';
  createdAt: Date = new Date();

  constructor(
    id: number,
    title: string,
    category: Category,
    text: string,
    createdAt: Date
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.text = text;
    this.createdAt = createdAt;
  }
}
