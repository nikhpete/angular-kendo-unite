import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, stagger, animateChild, query, group } from '@angular/animations';
import { moveDown, slideIn, slideOut } from './animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    trigger('todoAnimations', [
      transition(':enter', [
        group([
          query('h1', [
            useAnimation(moveDown)
          ]),
          query('input', [
            useAnimation(moveDown)
          ]),
          query('@todoItem',
            stagger(100, animateChild()))
        ])
      ])
    ]),

    trigger('todoItem', [
      transition(':enter', [
        useAnimation(slideIn),
      ]),
      transition(':leave', [
        useAnimation(slideOut)
      ]),
    ])
  ]
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todos = [
    { item: "Take dog to vet" },
    { item: "Get oil change" },
    { item: "Finish Super hard Puzzle" },
    { item: "Go for a long drive" },
    { item: "Create a todo-app" }
  ];

  addTodo(input: HTMLInputElement) {
    this.todos = [{ item: input.value }, ...this.todos];
    input.value = '';
  }

  removeTodo(i = -1) {
    if (i == -1) return;
    this.todos.splice(i, 1);
  }

}