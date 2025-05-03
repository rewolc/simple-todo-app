import React from 'react'
import { TTodo } from '../todoContainer/constants'
import classNames from 'classnames'
import s from './styles.module.css'

type TProps = {
  todo: TTodo
  handleChange: (v: TTodo['id']) => void
  handleDelete: (v: TTodo['id']) => void
}

export const TodoItem = ({ todo, handleDelete, handleChange }: TProps) => {
  const { completed, id, title } = todo

  return (
    <li className="todo-item">
      <input type="checkbox" checked={completed} onChange={() => handleChange(id)} />
      <button onClick={() => handleDelete(id)}>Delete</button>
      <span className={classNames({ [s.completed]: completed })}>{title}</span>
    </li>
  )
}
