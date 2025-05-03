import React from 'react'
import { render, screen } from '@testing-library/react'
import { TodoContainer } from '../components/todoContainer/TodoContainer'
import { ETodoGroups, TODOS } from '../components/todoContainer/constants'
import '@testing-library/jest-dom'
import { userEvent } from '@testing-library/user-event'

test('Render todos', () => {
  render(<TodoContainer />)
  const linkElement = screen.getByText(TODOS[0].title)
  expect(linkElement).toBeInTheDocument()
})

test('Delete todo', async () => {
  render(<TodoContainer />)

  const linkElement = screen.getByText(TODOS[0].title)

  const buttons = screen.getAllByRole('button', { name: /Delete/i })
  await userEvent.click(buttons[0])

  expect(linkElement).not.toBeInTheDocument()
})

test('Add todo', async () => {
  render(<TodoContainer />)

  const TODO_NAME = 'new Todo'
  const submit = screen.getByRole('button', { name: /submit/i })

  const input = screen.getByRole('textbox')
  await userEvent.type(input, TODO_NAME)
  await userEvent.click(submit)

  const linkElement = screen.getByText(TODO_NAME)

  expect(linkElement).toBeInTheDocument()
})

test('Change Todo group', async () => {
  render(<TodoContainer />)

  const linkElement = screen.getByText(TODOS[0].title)

  // Initial state check
  expect(linkElement).toHaveAttribute('data-group', ETodoGroups.TODO)

  // Find the <select> element and change the value
  const selectElement = screen.getAllByRole('combobox')
  await userEvent.selectOptions(selectElement[0], ETodoGroups.IN_PROGRESS)

  const changedLinkElement = screen.getByText(TODOS[0].title)

  // After changing the group, check if the data-group attribute is updated
  expect(changedLinkElement).toHaveAttribute('data-group', ETodoGroups.IN_PROGRESS)
})
