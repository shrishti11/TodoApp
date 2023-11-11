"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { todoInterface } from "@/interfaces/TodoInterface";
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";

export default function Home() {
    const [todos, setTodos] = useState<todoInterface[]>([
        {
            id: 1,
            title: "Test Title",
            description: "Test Desc",
            completed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
            isEditing: false,
        },
    ]);

    const toggleTodo = (id: number) => {
        let temp = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(temp);
    };

    const handleAddTodo = (title: string, desc: string) => {
        if (title) {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    title: title,
                    description: desc,
                    completed: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    isEditing: false,
                },
            ]);
        }
        return true;
    };

    const handleEditTodo = (id: number) => {
        let temp = todos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    isEditing: true,
                };
            }
            return todo;
        });
        setTodos(temp);
    };

    const updateTodo = (id: number, title: string, desc: string) => {
        let temp = todos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    title: title,
                    description: desc,
                    updatedAt: new Date(),
                    isEditing: false,
                };
            }
            return todo;
        });
        setTodos(temp);
    };

    return (
        <main>
            <AddTodo handleAddTodo={handleAddTodo} />
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                handleEditTodo={handleEditTodo}
                updateTodo={updateTodo}
            />
        </main>
    );
}
