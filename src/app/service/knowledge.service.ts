import { KnowledgeDTO } from './../model/knowledge-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Knowledge } from '../model/knowledge';
import { ErrorHandler } from '../util/error-handler';

@Injectable({
  providedIn: 'root',
})
export class KnowledgeService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Knowledge[]> {
    return this.httpClient
      .get<Knowledge[]>('http://localhost:3000/knowledges?_expand=category')
      .pipe(catchError(ErrorHandler.handleError));
  }

  delete(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`http://localhost:3000/knowledges/${id}`)
      .pipe(catchError(ErrorHandler.handleError));
  }

  getById(id: number): Observable<Knowledge> {
    return this.httpClient
      .get<Knowledge>(`http://localhost:3000/knowledges/${id}?_expand=category`)
      .pipe(catchError(ErrorHandler.handleError));
  }

  getByCategoryId(id: number): Observable<Knowledge[]> {
    return this.httpClient
      .get<Knowledge[]>(
        `http://localhost:3000/knowledges?categoryId=${id}&_expand=category`
      )
      .pipe(catchError(ErrorHandler.handleError));
  }

  update(knowledge: Knowledge) {
    let knowledgeDTO = new KnowledgeDTO(knowledge);
    return this.httpClient
      .put<Knowledge>(
        `http://localhost:3000/knowledges/${knowledge.id}`,
        knowledgeDTO
      )
      .pipe(catchError(ErrorHandler.handleError));
  }

  insert(knowledge: Knowledge) {
    let knowledgeDTO = new KnowledgeDTO(knowledge);
    return this.httpClient
      .post<Knowledge>('http://localhost:3000/knowledges', knowledgeDTO)
      .pipe(catchError(ErrorHandler.handleError));
  }
}
