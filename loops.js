var strangeLoops = []

function forLoop(array) {

  for (let i = 0; i < 25; i++) {
    
    if (i === 1) {
      array.push(`I am ${i} strange loop.`)
    } else if (i > 1) {
      array.push(`I am ${i} strange loops.`)
    }
  }
  
  return array
  
}

console.log(forLoop(strangeLoops))


function whileLoop(number) {
  
  while (number > 0) {
    
    console.log(number)
    number--
  } 
  
  return 'done'
}

console.log(whileLoop(10))


function doWhileLoop(i) {
  do 
}


```javascript
let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

do {
  console.log("doo-bee-doo-bee-doo");
} while (incrementVariable() < 5);
```
