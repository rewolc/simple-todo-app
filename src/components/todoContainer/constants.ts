import { v4 as uuidv4 } from 'uuid'

export enum ETodoGroups {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export const TODO_GROUPS_NAME = {
  [ETodoGroups.TODO]: 'ToDo',
  [ETodoGroups.IN_PROGRESS]: 'In Progress',
  [ETodoGroups.DONE]: 'Done',
}

export type TTodo = {
  id: string
  title: string
  group: ETodoGroups
}

export const TODOS: TTodo[] = [
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: 'Setup development environment',
    group: ETodoGroups.TODO,
  },
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: 'Develop website and add content',
    group: ETodoGroups.IN_PROGRESS,
  },
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: 'Deploy to live server',
    group: ETodoGroups.DONE,
  },
]
