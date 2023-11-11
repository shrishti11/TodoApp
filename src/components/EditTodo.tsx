import { todoInterface } from "@/interfaces/TodoInterface";
import { useState } from "react";

const EditTodo = (props: {
    todo: todoInterface;
    updateTodo: (id: number, title: string, desc: string) => void;
}) => {
    const [title, setTitle] = useState<string>(props.todo.title);
    const [desc, setDesc] = useState<string>(props.todo.description);

    return (
        <div
            style={{
                margin: "5px",
                border: "2px solid black",
                padding: "5px",
            }}
        >
            <div>
                <p>Edit Window</p>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <input
                    type="text"
                    value={desc}
                    onChange={(e) => {
                        setDesc(e.target.value);
                    }}
                />
            </div>
            <button
                style={{ margin: "5px 0" }}
                onClick={() => props.updateTodo(props.todo.id, title, desc)}
            >
                Save
            </button>
        </div>
    );
};

export default EditTodo;
