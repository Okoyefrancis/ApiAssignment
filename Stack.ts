console.clear();

class Stack {
  public stack: Array<number>;

  constructor() {
    this.stack = [];
  }

  addValue(val: number) {
    this.stack.push(val);

    return this.stack;
  }

  removeValue() {
    this.stack.pop();

    return this.stack;
  }

  size() {
    return this.stack.length;
  }

  peek() {
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    if (this.size() === 0) {
      return true;
    } else {
      return false;
    }
  }
}

let stack = new Stack();

// stack.addValue(4);
// stack.addValue(5);
// stack.addValue(2);
// stack.addValue(1);

console.log(stack);
// stack.removeValue();
console.log(stack);
console.log(stack.isEmpty());

const changeString= (x: string)=>{
    let z: Array<string> = x.split(" ");
    let w: string = "";
    
    while(z.length !== 0){
        let k = z.pop();
        w += `$(k)`
    }

    return w
};

let word: string = "Lagos sky appers to be white and sunny today"

console.log(changeString(word));

//
