import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { KnowledgeListComponent } from './knowledge-list/knowledge-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { KnowledgeFormComponent } from './knowledge-form/knowledge-form.component';
import { KnowledgeItemComponent } from './knowledge-item/knowledge-item.component';
import { KnowledgeItemDetailComponent } from './knowledge-item-detail/knowledge-item-detail.component';

const routes: Routes = [
  { path: 'category', component: CategoryListComponent },
  { path: 'category/form', component: CategoryFormComponent },
  { path: 'category/form/:id', component: CategoryFormComponent },
  { path: 'category/view/:id', component: CategoryItemComponent },
  { path: 'knowledge', component: KnowledgeListComponent },
  { path: 'knowledge/form', component: KnowledgeFormComponent },
  { path: 'knowledge/form/:id', component: KnowledgeFormComponent },
  { path: 'knowledge/view/:id', component: KnowledgeItemDetailComponent },
  { path: '', component: MainComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
