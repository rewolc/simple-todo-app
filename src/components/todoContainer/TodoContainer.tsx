import React, { useState } from 'react'
import { TodosList } from '../todoList/TodosList'
import { Header } from '../head/Header'
import { InputTodo } from '../inputTodo/InputTodo'
import { v4 as uuidv4 } from 'uuid'
import s from './styles.module.css'
import { ETodoGroups, TODOS, TTodo } from './constants'

export const TodoContainer = () => {
  const [todos, setTodos] = useState<TTodo[]>(TODOS)

  const handleChange = (changedTodo: TTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === changedTodo.id) {
          todo.group = changedTodo.group
        }
        return todo
      })
    )
  }

  const handleDelete = (id: TTodo['id']) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => {
        return todo.id !== id
      })
    )
  }

  const handleAddTodo = (title: TTodo['title']) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      title: title,
      group: ETodoGroups.TODO,
    }

    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  return (
    <div className={s.container}>
      <Header />
      <InputTodo addTodoProps={handleAddTodo} />
      <TodosList todos={todos} handleChange={handleChange} handleDelete={handleDelete} />
    </div>
  )
}
