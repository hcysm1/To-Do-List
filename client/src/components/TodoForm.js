const TodoForm = () => {
  const onFormSubmit = () => {};

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input className="input" placeholder="Enter a new Item..." />
    </form>
  );
};

export default TodoForm;
