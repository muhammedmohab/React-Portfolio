import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo({ text });
    setText("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className=" btn btn-primary" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
