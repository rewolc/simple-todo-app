import React from 'react'
import s from './styles.module.css'

export const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>Simple Todo App</h1>
      <p className={s.subtitle}>Please add to-dos item(s) through the input field</p>
    </header>
  )
}
