import { Injectable } from '@angular/core';
import { Question } from '../app/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = [
    {
      id: 1,
      text: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London', 'Madrid'],
      correctAnswer: 'Paris'
    },  
  ];

  private userAnswers: Map<number, string> = new Map();

  getQuestions(): Question[] {
    return this.questions;
  }

  selectAnswer(question: Question, answer: string) {
    this.userAnswers.set(question.id, answer);
  }

  submitAnswers(): number {
    let score = 0;
    this.userAnswers.forEach((answer, questionId) => {
      const question = this.questions.find(q => q.id === questionId);
      if (question && answer === question.correctAnswer) {
        score++;
      }
    });
    return score;
  }
}
