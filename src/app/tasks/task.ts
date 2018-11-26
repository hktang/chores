export class Task {
  id: number;
  name: string;
  repeat: boolean = false;
  every: string = "week";
  status: string = "pending";
  created: Date = new Date();
  updated: Date = new Date();
  due: Date;
  completed: Date = null;
}
