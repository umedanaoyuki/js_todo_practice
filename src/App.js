import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListModel } from "./model/TodoListModel.js";

import { element, render } from "./view/html-util.js";

export class App {
  // 1. TodoListModelの初期化
  #todoListModel = new TodoListModel();

  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");

    // 2. TodoListModelの状態が更新されたら表示を更新する
    this.#todoListModel.onChange(() => {
      // TodoリストをまとめるList要素
      const todoListElement = element`<ul></ul>`;

      const todoItems = this.#todoListModel.getTodoItems();

      todoItems.forEach((item) => {
        const todoItemElement = element`<li>${item.title}</li>`;
        todoListElement.appendChild(todoItemElement);
      });

      render(todoListElement, containerElement);
      todoItemCountElement.textContent = `Todoアイテム数: ${this.#todoListModel.getTotalCount()}`;
    });

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this.#todoListModel.addTodo(
        new TodoItemModel({
          title: inputElement.value,
          completed: false,
        })
      );
      inputElement.value = "";
    });
  }
}
