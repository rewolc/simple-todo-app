import React from 'react'
import { TodoItem } from '../todoItem/TodoItem'
import { TTodo } from '../todoContainer/constants'

type TProps = {
  todos: TTodo[]
  handleChange: (v: TTodo['id']) => void
  handleDelete: (v: TTodo['id']) => void
}

export const TodosList = ({ todos, handleDelete, handleChange }: TProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}
