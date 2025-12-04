/* Print numbers from 1 to 10 Loop from 1 to 10 and print each number. */
{
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
}

/*Print only even number from 1 to 20 use a loop and condition to print only even ones.
 */
//method 1
{
  for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) console.log(i);
  }
}
//method 2
{
  for (let i = 2; i < 21; i += 2) {
    console.log(i);
  }
}

/*. Print numbers from 10 to 1 reverse loop with loop with a decrement. */
{
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
}

/* Print the word "yes" 5 times Repeat using a loop. */
{
  for (let i = 1; i < 6; i++) {
    console.log("yes");
  }
}

/* Print wheher number from 1 to 10 are even or odd. */
{
  for (i = 1; i < 11; i++) {
    if (i % 2 === 0) {
      console.log(`${i} - is Even`);
    } else {
      console.log(`${i} - is Odd`);
    }
  }
}

/* Ask user for a number and say if it's positive or negative use prompt() and a conditional. */

// jab bhi prompt se kutch bhi mangoge to socho kya wo number hai aur agar hai to convert karna padega
//paeseInt
//Number()
// +Prompt()

{
  let num = +prompt("number batao");

  if (num === 12) {
    console.log("i is 12");
  } else {
    console.log("it is not 12");
  }
}
