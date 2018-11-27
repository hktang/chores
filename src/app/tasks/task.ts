export class Task {
  id: number;
  name: string;
  repeat: boolean = false;
  every: string = "week";
  status: string = "pending";
  created: Date = new Date();
  updated: Date = new Date();
  due: Date = null;
  completed: Date = null;
}
