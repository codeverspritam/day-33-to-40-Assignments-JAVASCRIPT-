# JavaScript Programming Tasks

A collection of beginner-friendly JavaScript exercises to practice core concepts like functions, arrays, loops, objects, and asynchronous operations.

---

1. **Write a function `sayHello()` that prints `"Hello JavaScript"`**

2. **Create a function `add(a, b)` that returns their sum and log the result**

3. **Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`**

4. **Use rest parameters to make a function that adds unlimited numbers**

5. **Create an IIFE that prints `"I run instantly!"`**

6. **Make a nested function where the inner one prints a variable from the outer one**

7. **Create an array of 5 fruits. Add one at the end and remove one from the beginning**

8. **Use a `for` loop to print all elements of an array**

9. **Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value**

10. **Use `setTimeout()` to log `"Time’s up!"` after 2 seconds**
---
Here’s a Markdown-formatted version of the JavaScript exercises 

```markdown
# JavaScript Practice Tasks

A list of beginner-friendly JavaScript exercises to strengthen your understanding of functions, arrays, objects, and asynchronous operations.
```

1. **Function to Print a Greeting**
   ```javascript
   function sayHello() {
     console.log("Hello JavaScript");
   }
   ```

2. **Function to Add Two Numbers**
   ```javascript
   function add(a, b) {
     const sum = a + b;
     console.log(sum);
     return sum;
   }
   ```

3. **Function with Default Parameter**
   ```javascript
   function greet(name = "Guest") {
     console.log(`Hi ${name}`);
   }
   ```

4. **Function Using Rest Parameters**
   ```javascript
   function addAll(...numbers) {
     return numbers.reduce((acc, curr) => acc + curr, 0);
   }
   ```

5. **Immediately Invoked Function Expression (IIFE)**
   ```javascript
   (function() {
     console.log("I run instantly!");
   })();
   ```

6. **Nested Function Accessing Outer Variable**
   ```javascript
   function outer() {
     const message = "Hello from outer!";
     function inner() {
       console.log(message);
     }
     inner();
   }
   ```

7. **Array Manipulation**
   ```javascript
   const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
   fruits.push("Fig");
   fruits.shift();
   console.log(fruits);
   ```

8. **Print Array Elements Using a Loop**
   ```javascript
   const items = ["Pen", "Pencil", "Eraser", "Sharpener"];
   for (let i = 0; i < items.length; i++) {
     console.log(items[i]);
   }
   ```

9. **Object Creation and Value Printing**
   ```javascript
   const person = {
     name: "Alice",
     age: 30,
     city: "Wonderland"
   };

   for (let key in person) {
     console.log(`${key}: ${person[key]}`);
   }
   ```

10. **Using `setTimeout()`**
    ```javascript
    setTimeout(() => {
      console.log("Time’s up!");
    }, 2000);
    ```

---

Feel free to copy this into a `.md` file and use it for your learning or teaching materials!
```

Would you like me to add headings, links to documentation, or turn this into a mini tutorial format?
