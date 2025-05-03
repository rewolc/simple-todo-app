import React from 'react'
import { TodoItem } from '../todoItem/TodoItem'
import { ETodoGroups, TODO_GROUPS_NAME, TTodo } from '../todoContainer/constants'

type TProps = {
  todos: TTodo[]
  handleChange: (v: TTodo) => void
  handleDelete: (v: TTodo['id']) => void
}

export const TodosList = ({ todos, handleDelete, handleChange }: TProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{TODO_GROUPS_NAME[ETodoGroups.TODO]}</th>
          <th>{TODO_GROUPS_NAME[ETodoGroups.IN_PROGRESS]}</th>
          <th>{TODO_GROUPS_NAME[ETodoGroups.DONE]}</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return (
            <tr key={todo.id}>
              {todo.group === ETodoGroups.TODO && (
                <TodoItem todo={todo} handleChange={handleChange} handleDelete={handleDelete} />
              )}
              <td></td>
              {todo.group === ETodoGroups.IN_PROGRESS && (
                <TodoItem todo={todo} handleChange={handleChange} handleDelete={handleDelete} />
              )}
              <td></td>
              {todo.group === ETodoGroups.DONE && (
                <TodoItem todo={todo} handleChange={handleChange} handleDelete={handleDelete} />
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
