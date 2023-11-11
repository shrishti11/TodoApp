import { useState } from "react";

const AddTodo = (props: {
    handleAddTodo: (title: string, desc: string) => void;
}) => {
    const [newTodoTitle, setNewTodoTitle] = useState<string>("");
    const [newTodoDesc, setNewTodoDesc] = useState<string>("");
    return (
        <div style={{ margin: "5px" }}>
            <input
                type="text"
                placeholder="Add Todo Title"
                value={newTodoTitle}
                onChange={(e) => {
                    setNewTodoTitle(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Add Todo Desc"
                value={newTodoDesc}
                onChange={(e) => {
                    setNewTodoDesc(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    props.handleAddTodo(newTodoTitle, newTodoDesc);
                    setNewTodoTitle("");
                    setNewTodoDesc("");
                }}
            >
                Add
            </button>
        </div>
    );
};

export default AddTodo;
