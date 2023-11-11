import { todoInterface } from "@/interfaces/TodoInterface";
import EditTodo from "./EditTodo";

const TodoList = (props: {
    todos: todoInterface[];
    toggleTodo: (id: number) => void;
    handleEditTodo: (id: number) => void;
    updateTodo: (id: number, title: string, desc: string) => void;
}) => {
    const { todos, toggleTodo } = props;

    const baseStyle = {
        margin: "5px",
        border: "2px solid black",
        padding: "5px",
    };

    return (
        <div>
            {todos.map((todo) => {
                return todo.isEditing ? (
                    <EditTodo todo={todo} updateTodo={props.updateTodo} />
                ) : (
                    <div
                        key={todo.id}
                        style={
                            todo.completed
                                ? {
                                      textDecoration: "line-through",
                                      ...baseStyle,
                                  }
                                : { ...baseStyle }
                        }
                    >
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        <div>
                            <p
                                style={{ fontSize: "10px" }}
                                suppressHydrationWarning
                            >
                                Created: {todo.createdAt.toISOString()}
                            </p>{" "}
                            <p
                                style={{ fontSize: "10px" }}
                                suppressHydrationWarning
                            >
                                Updated: {todo.updatedAt.toISOString()}
                            </p>
                            <br />
                            <div>
                                <button
                                    onClick={() => {
                                        props.handleEditTodo(todo.id);
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        toggleTodo(todo.id);
                                    }}
                                >
                                    {todo.completed ? "Unmark" : "Mark As Done"}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoList;
