// Number 1

for (i = 1; i < 16; i++) {
  if (i > 5) {
    console.log(`${i} დიდია 5-ზე`);
  } else {
    console.log(i);
  }
}

console.log("!! BREAK !!");

// number 2

let numbers = ["3", "6", "9", "12", "15"];

for (index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 0) {
    console.log(numbers[index]);
  }
}

console.log("!! BREAK !!");

// number 3

let word = "Gilocavt axal wels";

for (let index = 0; index < word.length; index++) {
  if (word[index] === "a") {
    console.log((word[index] = word[index] + "  Damatebiti Teqsti"));
  } else {
    console.log(word[index]);
  }
}

console.log("!! BREAK !!");

// number 4

let colors = ["red", "green", "blue", "yellow"];

for (let index = 0; index < colors.length; index++) {
  if (colors[index].length > "5") {
    console.log(colors[index]);
  }
}

console.log("!!BREAK!!");

// number 5

for (let i = 1; i < 51; i++) {
  if (i % 7 === 0) {
    console.log(`${i} გაყოფადია 7-ზე`);
  } else {
    console.log(i);
  }
}

console.log("!! BREAK !!");

// number 6

let numS = ["4", "8", "12", "16", "20"];

for (let index = 0; index < numS.length; index++) {
  console.log(numS[index] * 2);
}

console.log("!! BREAK !!");

// number 7

let wordie = "javascript";

for (let index = 0; index < wordie.length; index++) {
  if (wordie[index] === "j") {
    console.log(wordie[index]);
  }
}

// ვერ მივხვდი

console.log("!! BREAK !!");

// number 8

let Nums = ["5", "10", "15", "20", "25"];

for (let index = 0; index < Nums.length; index++) {
  if (Nums[index] % 2 === 0) {
    console.log(Nums[index]);
  }
}

console.log("!! BREAK !!");

// number 9

let text = "hello world";

for (let index = 0; index < text.length; index++) {
  if (text[index] !== "o") {
    console.log(text[index]);
  }
}

console.log("!! BREAK !!");

// number 10

let oddNums = ["1", "2", "3", "4", "5", "6"];
let final = 0;

for (let index = 0; index < oddNums.length; index++) {
  if (oddNums[index] % 2 === 0) {
    final = final + Number(oddNums[index]);
  }
}

console.log(final);

// შეკითხვა: როგორ შეიძლებოდა ამის სხვაგვარად გაკეთება

console.log("!! BREAK !!");

// number 11

let calculator = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

for (let index = 0; index < calculator.length; index++) {
  console.log(`10 * ${calculator[index]} = ${10 * calculator[index]}`);
}

console.log("!! BREAK !!");

// number 12

let array = ["2", "7", "4", "9", "5"];

for (let index = 0; index < array.length; index++) {
  if (array[index] > 4) {
    console.log(array[index] * 3);
  } else {
    console.log(array[index]);
  }
}

console.log("!! BREAK !!");

// number 13

for (let i = 1; i < 31; i++) {
  if (i > 10) {
    console.log((index = `${i} დამატებითი ტექსტი`));
  } else {
    console.log(i);
  }
}

console.log("!! BREAK !!");

// number 14

let text1 = "frontend";

if (text1.includes("e")) {
  console.log("ნაპოვნია e");
}

console.log("!! BREAK !!");

// number 15

let bigNumbers = ["100", "200", "300", "400", "500"];

for (let j = 0; j < bigNumbers.length; j++) {
  if (bigNumbers[j] < 250) {
    console.log(bigNumbers[j]);
  }
}
