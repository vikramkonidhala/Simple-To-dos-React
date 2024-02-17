import './index.css'

const TodoItem = props => {
  const {data, onDelete} = props
  const {title, id} = data

  const onDeleteTodo = () => {
    onDelete(id)
  }
  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button className="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
