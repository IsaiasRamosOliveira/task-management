import { useState } from "react";
import { v4 } from "uuid";
import { ITask } from "./task.model";

export const useTasksViewModel = () => {
  const [tasks, setTasks] = useState<ITask[] | []>([
    {
      id: v4(),
      description: 'Create initial layout for homepage',
      check: true,
      role: 'approved'
    },
    {
      id: v4(),
      description: 'Fixing icons transparent background',
      check: true,
      role: 'progress'
    },
    {
      id: v4(),
      description: 'Fixing icons transparent background',
      check: true,
      role: 'progress'
    },
    {
      id: v4(),
      description: 'Create initial layout for homepage',
      check: true,
      role: 'progress'
    },
    {
      id: v4(),
      description: 'Discussions regarding workflow improvement',
      check: false,
      role: 'review'
    },
    {
      id: v4(),
      description: 'Create quotation for app redesign project',
      check: false,
      role: 'waiting'
    },
  ])

  const addTask = (task: ITask) => {
    setTasks([...tasks, ])
  }

  return {
    tasks,
    addTask
  }
}

