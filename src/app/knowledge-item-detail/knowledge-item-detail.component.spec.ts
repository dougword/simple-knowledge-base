import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeItemDetailComponent } from './knowledge-item-detail.component';

describe('KnowledgeItemDetailComponent', () => {
  let component: KnowledgeItemDetailComponent;
  let fixture: ComponentFixture<KnowledgeItemDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgeItemDetailComponent]
    });
    fixture = TestBed.createComponent(KnowledgeItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
