const TodoList = ({ todos,deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <div className={(i%2===0)?'card-body bg-light':'card-body bg-secondary'} key={i}>
            <h6 class="card-title d-inline">{todo.text}</h6> &nbsp;
            <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(i)}>Delete</button>
          </div>
        );
      })
    ) : (
      <p>No todos, yay!</p>
    );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Todos</h3>
            </div>
            <div className="card-body">
              {todosList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;