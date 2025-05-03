import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import s from './styles.module.css'
import classNames from 'classnames'

type TProps = {
  addTodoProps: (v: string) => void
}

export const InputTodo = ({ addTodoProps }: TProps) => {
  const [title, setTitle] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    addTodoProps(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className={s.formContainer}>
      <input
        type="text"
        className={s.inputText}
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <input
        type="submit"
        className={classNames(s.inputSubmit, { [s.disabled]: !title })}
        value="Submit"
        disabled={!title}
      />
    </form>
  )
}
