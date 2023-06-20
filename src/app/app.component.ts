import { Component, OnInit } from '@angular/core';
import { CategoryHandler } from './handler/category-handler';
import { KnowledgeHandler } from './handler/knowledge-handler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'simple-knowledge-base';

  ngOnInit(): void {
    CategoryHandler.init();
    KnowledgeHandler.init();
  }
}
