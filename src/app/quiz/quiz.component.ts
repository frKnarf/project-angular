import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions: Question[] = [];
  score: number = 0;

  constructor(private quizService: QuizService) {
    this.questions = this.quizService.getQuestions();
  }

  selectAnswer(question: Question, answer: string) {
    this.quizService.selectAnswer(question, answer);
  }

  submitAnswers() {
    this.score = this.quizService.submitAnswers();
  }
}
