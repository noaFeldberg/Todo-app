import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from "./../model/Todo"

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'Learn cpp',
        isCompleted: true,
        date: new Date()
      },
      {
        id: '222',
        title: 'Learn react',
        isCompleted: true,
        date: new Date()
      },
      {
        id: '333',
        title: 'Learn angular',
        isCompleted: false,
        date: new Date()
      }
    ];
   }

   getTodos() {
     return of(this.todos)
   }

   assTodo(todo: Todo) {
     this.todos.push(todo);
   }

   changeStatus(todo: Todo) {
     this.todos.map( singelTodo => {
       if(singelTodo.id == todo.id) {
         todo.isCompleted = !todo.isCompleted;
       }
     });
   }

   deleteTodo(todo: Todo) {
     const indexOfTodo = this.todos.findIndex(
       (currentObj) => currentObj.id === todo.id,
     );
     this.todos.splice(indexOfTodo,1);
   }

}
