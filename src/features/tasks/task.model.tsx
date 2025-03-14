export interface ITask {
  id: string
  description: string
  check: boolean
  role: "approved" | 'progress' | "waiting"  | "review"
}