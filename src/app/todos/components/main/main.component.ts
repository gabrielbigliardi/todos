import { Component, computed, inject } from "@angular/core";
import { TodosService } from "../../services/todos.service";
import { FilterEnum } from "../../types/filter.enum";
import { TodoComponent } from "../todo/todo.component";

@Component({
    selector: 'app-todos-main',
    templateUrl: './main.component.html',
    standalone: true,
    imports: [TodoComponent]
})
export class MainComponent {
    todosService = inject(TodosService)
    editingId: string | null = null

    visibleTodos = computed(() => {
        const todos = this.todosService.todosSig()
        const filter = this.todosService.filterSig()

        if (filter === FilterEnum.active) {
            return todos.filter(todo => !todo.isCompleted)
        } else if (filter === FilterEnum.completed) {
            return todos.filter(todo => todo.isCompleted)
        }
        return todos;
    })

    setEditingId(editingId: string | null): void {
        this.editingId = editingId
    }
}