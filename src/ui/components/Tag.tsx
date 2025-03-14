import { ITask } from "../../features/tasks/task.model";

export const Tag = ({ role }: Pick<ITask, 'role'>) => {
  return (
    <span>{role}
    </span>
  );
}
