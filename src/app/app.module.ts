import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { KnowledgeListComponent } from './knowledge-list/knowledge-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { KnowledgeItemComponent } from './knowledge-item/knowledge-item.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { HttpClientModule } from '@angular/common/http';
import { KnowledgeFormComponent } from './knowledge-form/knowledge-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CategoryFormComponent,
    MainComponent,
    KnowledgeListComponent,
    CategoryListComponent,
    KnowledgeItemComponent,
    CategoryItemComponent,
    KnowledgeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
