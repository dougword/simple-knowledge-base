import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { KnowledgeListComponent } from './knowledge-list/knowledge-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryItemComponent } from './category-item/category-item.component';

const routes: Routes = [
  { path: 'category', component: CategoryListComponent },
  { path: 'category/form', component: CategoryFormComponent },
  { path: 'category/form/:id', component: CategoryFormComponent },
  { path: 'category/view/:id', component: CategoryItemComponent },
  { path: 'knowledge', component: KnowledgeListComponent },
  { path: '', component: MainComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
