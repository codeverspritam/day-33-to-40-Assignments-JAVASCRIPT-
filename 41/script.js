/*Q1: Write a higher-order function runTwice(fn) that takes another function and executes it two times.*/
{
  function runTwice(fn) {
    fn();
    fn();
  }
  runTwice(function () {
    console.log("Hello");
  });
}
/*Q2: Create one pure function that always returns the same output for a given input,
and one impure function using a global variable.*/
{
  function pure(a, b) {
    console.log(a + b);
  }
  let global = 0;
  function impure(a, b) {
    global++;
    console.log(a + global);
  }
  impure(2);
  impure(2);

  pure(1, 2);
  pure(1, 2);
}

/*Q3: Write a function that uses object destructuring inside parameters to extract and print name and age.*/
{
  function abcd({ name, age }) {
    console.log(name, age);
  }
  abcd({ name: "pritam", age: "22" });
}

/*Q4: Demonstrate the difference between a normal function and an arrow function when used as object methods (the this issue). */
{
  let obj = {
    name: "Pritam",
    fnc: function () {
      console.log(this);
    },
    fnc2: () => {
      console.log(this);
    },
  };
  obj.fnc();
  /*Output 
  >>{name: 'Pritam', fnc: ƒ, fnc2: ƒ}*/

  obj.fnc2();
  /*Output 
  >>Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}*/
}

/*Q5: Given an array of numbers, use map() to create a new array where each number is squared. */
{
  let arr = [1, 2, 3, 4, 5, 6];
  let newarr = arr.map(function (val) {
    return val * val;
  });
  console.log(newarr);
}