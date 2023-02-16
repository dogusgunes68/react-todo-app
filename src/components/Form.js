import styles from "../style.module.css";
import shortid from "shortid";
const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (event) => {
    if (event.target.value !== "") {
      setTodo(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.todoform}>
        <input
          value={todo}
          onChange={handleChange}
          className={styles.todoinput}
          placeholder="Add Todo Item"
        />
        <button className={styles.todobutton}>Add</button>
      </form>
    </div>
  );
};

export default Form;
