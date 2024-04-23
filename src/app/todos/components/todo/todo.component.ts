import { Component, Input } from "@angular/core";
import { TodoInterface } from "../../types/todo.interface";

@Component({
    selector: "app-todos-todo",
    templateUrl: "./todo.component.html",
    standalone: true,
})
export class TodoCompoent {
    @Input({ required: true }) todo!: TodoInterface
}