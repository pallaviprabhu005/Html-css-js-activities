let str = prompt("Enter a string:");

str = str.toLowerCase();

let vowels = "aeiou";

let count = 0;

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}
alert(`This string contains ${count} vowels.`);

