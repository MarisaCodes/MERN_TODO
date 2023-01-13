const AddTodo = () => {
  return (
    <form>
      <input type="text" id="title" placeholder="Todo..." />
      <input type="text" id="author" placeholder="Extra details..." />
      <input type="submit" value="Add todo" />
    </form>
  );
};

export default AddTodo;
