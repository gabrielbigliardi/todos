import { Injectable, inject } from "@angular/core";
import { Firestore, collectionData, addDoc, fromRef, doc, deleteDoc } from "@angular/fire/firestore";
import { collection } from "@firebase/firestore";
import { Observable, from } from "rxjs";
import { TodoInterface } from "../types/todo.interface";

@Injectable({
    providedIn: 'root',
})

export class TodosFirebaseService {
    firestore = inject(Firestore)
    todosCollection = collection(this.firestore, 'cart')

    getTodos(): Observable<TodoInterface[]> {
        return collectionData(this.todosCollection, {
            idField: 'id'
        }) as Observable<TodoInterface[]>
    }

    addTodo(text: string): Observable<string> {
        const todoToCreate = { text, isCompleted: false }
        const promise = addDoc(this.todosCollection, todoToCreate).then(response => response.id)
        return from(promise)
    }

    removeTodo(todoId: string): Observable<void> {
        const docRef = doc(this.firestore, 'cart/' + todoId)
        const promise = deleteDoc(docRef)
        return from(promise)
    }
}