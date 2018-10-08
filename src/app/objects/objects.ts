

export class List{
    constructor(data){
      Object.keys(data).forEach( key => {
        this[key] = data[key]
      })
    }
    name: string;
    tasks: Task[];
  
    public getNumOfTasks(): number{
      return this.tasks.length
    }
    public getNumOfCompletedTasks(): number{
      return this.tasks.filter(task => task.done).length
    }
  
  }
  
  export class Task{
    constructor(){
      this.name = null;
      this.reset();
    }
    name: string;
    done: boolean;
  
    complete(): void{
      this.done = true;
    }
    reset(): void{
      this.done = false;
    }
}