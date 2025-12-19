/* Q1: Write a function sayHello() that prints "Hello JavaScript" */
{
  function sayHello() {
    console.log("Hello javaScript");
  }
  sayHello();
}

/* Q2: Create a function add(a, b) that returns their sum and log the result */
{
  function add(a, b) {
    let sum = a + b;
    console.log(sum);
    return sum;
  }
  add(2, 6);
}

/* Q3: Write a function with a default parameter name = "Guest" that print "Hi <name>" */
{
  function nameOfgast(guest) {
    console.log(`hi ${guest}`);
  }
  nameOfgast("pritam");
}

/*Q4: Use rest parameters to make a function that adds unlimited numbers */
/*----method:1----*/
{
  function addUnlimited(...nums) {
    let ans = nums.reduce(function (acc, val) {
      return acc + val;
    }, 0);
    console.log(ans);
  }
  addUnlimited(1, 2, 3);
}
/*----method:2-----*/
{
  function addUnlimited(...nums) {
    nums.forEach(function (val) {
      sum = sum + val;
    });
    console.log(sum);
  }
  addUnlimited(1, 2, 3, 4, 5, 6);
}
/*----method:3-----*/
{
  function addUnlimited(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum = sum + nums[i];
    }
  }
  addUnlimited(1, 2, 3, 4, 5, 6);
}

/* Q5: Create an IIFE that prints "I run instantly!" */
{
  (function () {
    console.log("I run instantly!");
  })();
}

/* Q6: Make a nested function where the inner one prints a variable from the outer one */
{
  function parent() {
    let a = 12;
    function child() {
      console.log(a);
    }
    child();
  }
  parent();
}
