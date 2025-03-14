import "./task.css";
import { useTasksViewModel } from "./tasks.view-model";

export const Tasks = () => {
  const { tasks } = useTasksViewModel()

  return (
    <div className="box-tasks">
      {
        tasks.map((task) => (
          <div>
            <p>{task.description}</p>
          </div>
        ))
      }
    </div>
  );
}
