import { v4 as uuidv4 } from 'uuid'

export type TTodo = {
  id: string
  title: string
  completed: boolean
}

export const TODOS: TTodo[] = [
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: 'Setup development environment',
    completed: true,
  },
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: 'Develop website and add content',
    completed: false,
  },
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: 'Deploy to live server',
    completed: false,
  },
]
