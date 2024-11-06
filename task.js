//1.
let str = "Hello World!";
str = str.replace("World!", "My Dear Friend");
console.log(str);  // Output: Hello My Dear Friend



//2.
let a = "Hungry";
let result = a.repeat(10);
console.log(result);  // Output: HungryHungryHungryHungryHungryHungryHungryHungryHungryHungry



//3.
let sentence = "The quick brown fox jumps over the lazy dog. The fox is clever.";
let lastIndex = sentence.lastIndexOf("fox");
console.log(lastIndex);  // Output: 43



//4.
let message = "Hello, world!";
let startsWithHi = message.toLowerCase().startsWith("hi");
console.log(startsWithHi);  // Output: false




//5.
let fileName = "document.pdf";
let endsWithPdf = fileName.endsWith(".pdf");
console.log(endsWithPdf);  // Output: true

