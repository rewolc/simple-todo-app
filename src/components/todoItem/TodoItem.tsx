import React from 'react'
import { ETodoGroups, TODO_GROUPS_NAME, TTodo } from '../todoContainer/constants'
import classNames from 'classnames'
import s from './styles.module.css'

type TProps = {
  todo: TTodo
  handleChange: (v: TTodo) => void
  handleDelete: (v: TTodo['id']) => void
}

export const TodoItem = ({ todo, handleDelete, handleChange }: TProps) => {
  const { group, id, title } = todo

  const handleChangeStatus = (v: ETodoGroups) => {
    handleChange({ ...todo, group: v })
  }

  return (
    <td className={s.todoItem}>
      <select
        onChange={(e) => handleChangeStatus(e.target.value as ETodoGroups)}
        disabled={group === ETodoGroups.DONE}
        value={group}
      >
        <option value={ETodoGroups.TODO}> {TODO_GROUPS_NAME[ETodoGroups.TODO]}</option>
        <option value={ETodoGroups.IN_PROGRESS}>{TODO_GROUPS_NAME[ETodoGroups.IN_PROGRESS]}</option>
        <option value={ETodoGroups.DONE}>{TODO_GROUPS_NAME[ETodoGroups.DONE]}</option>
      </select>
      <span className={classNames({ [s.completed]: group === ETodoGroups.DONE })}>{title}</span>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </td>
  )
}
