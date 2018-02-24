import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTextQuestionComponent } from './quiz-text-question.component';

describe('QuizTextQuestionComponent', () => {
  let component: QuizTextQuestionComponent;
  let fixture: ComponentFixture<QuizTextQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTextQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTextQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
