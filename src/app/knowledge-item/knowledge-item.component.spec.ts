import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeItemComponent } from './knowledge-item.component';

describe('KnowledgeItemComponent', () => {
  let component: KnowledgeItemComponent;
  let fixture: ComponentFixture<KnowledgeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgeItemComponent]
    });
    fixture = TestBed.createComponent(KnowledgeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
