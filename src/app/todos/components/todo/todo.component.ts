import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { TodoInterface } from "../../types/todo.interface";
import { CommonModule } from "@angular/common";
import { TodosService } from "../../services/todos.service";

@Component({
    selector: "app-todos-todo",
    templateUrl: "./todo.component.html",
    standalone: true,
    imports: [CommonModule]
})
export class TodoComponent implements OnInit {
    @Input({ required: true }) todo!: TodoInterface;
    @Input({ required: true }) isEditing!: boolean;
    @Output() setEditingId: EventEmitter<string | null> = new EventEmitter()

    todoService = inject(TodosService)

    editingText: string = ''

    ngOnInit(): void {
        this.editingText = this.todo.text;

    }

    changeText(event: Event) {
        const value = (event.target as HTMLInputElement).value
        this.editingText = value;
    }

    changeTodo(): void {
        this.todoService.changeTodo(this.todo.id, this.editingText)
        this.setEditingId.emit(null)
    }

    setTodoInEditMode(): void {
        this.setEditingId.emit(this.todo.id)
    }
}