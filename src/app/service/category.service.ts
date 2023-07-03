import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Promise<Category[]> {
    return lastValueFrom(this.httpClient.get<Category[]>('http://localhost:3000/categories'));
  }

  delete(id: number): Promise<void> {
    return lastValueFrom(this.httpClient.delete<void>(`http://localhost:3000/categories/${id}`));
  }

  getById(id: number): Promise<Category> {
    return lastValueFrom(this.httpClient.get<Category>(`http://localhost:3000/categories/${id}`));
  }

  update(category: Category) {
    return lastValueFrom(this.httpClient.put<Category>(`http://localhost:3000/categories/${category.id}`, category));
  }

  insert(category: Category) {
    return lastValueFrom(this.httpClient.post<Category>('http://localhost:3000/categories', category));
  }

}
