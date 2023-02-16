import styles from "../style.module.css";

const Todo = ({ todoItem, todoList, setTodoList }) => {
  const deleteTodo = () => {
    let newTodoList = todoList.filter((item) => item.id !== todoItem.id);
    setTodoList(newTodoList);
  };
  return (
    <div>
      <div className={styles.todoitem}>
        <h3 className={styles.todoname}>{todoItem.name}</h3>
        <button onClick={deleteTodo} className={styles.deletebutton}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Todo;
