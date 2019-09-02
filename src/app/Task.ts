export class Task {
    taskName: string;
    taskDesc: string;
    taskStatus: TaskStatus;

    constructor(
        name: string, 
        desc?: string,
        status = TaskStatus.pending
        ) {
            this.taskName = name;
            this.taskDesc = desc;
            this.taskStatus = status;
    }
}

export enum TaskStatus {
    completed = 'completed',
    pending = 'pending'
}
