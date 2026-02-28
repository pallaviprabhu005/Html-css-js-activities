let array= {
  numbers: [5, 12, 8, 20, 3],   
  
  findSum: function() {
    let sum = 0;
    for (let i = 0; i < this.numbers.length; i++) {
      sum += this.numbers[i];
    }
    return sum;
  },

  findMax: function() {
    let max = this.numbers[0];
    for (let i = 1; i < this.numbers.length; i++) {
      if (this.numbers[i] > max) {
        max = this.numbers[i];
      }
    }
    return max;
  }
};

let total = array.findSum();
let maximum = array.findMax();

console.log("Array:", array.numbers);
console.log("Sum =", total);
console.log("Maximum =", maximum);
