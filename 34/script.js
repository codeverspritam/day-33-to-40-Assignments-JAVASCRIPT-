/* Ask user’s age and check if eligible to vote
If age >= 18 → “Eligible”, else → “Not eligible”.*/
// method 1
{
  let age = +prompt("age batao");
  if (age >= 18) {
    console.log("you are eligible for vote");
  } else {
    console.log("you are not eligible for vote");
  }
}
// method 2
{
  let age = prompt("age batao");
  if (age === null) {
    console.error("you cancelled it");
  } else {
    if (age.trim() === "") {
      console.error("you did not enter anything");
    } else {
      age = Number(age.trim());
      if (isNaN(age)) {
        console.error("this is not a valid number");
      } else {
        console.log("age is valid number");
      }
    }
  }
}

/*Print multiplication table of 5
Use loop to print 5 × 1 to 5 × 10.*/
{
  for (let i = 1; i < 11; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }
}

/* Count how many numbers between 1 and 15 are greater than 8
Loop and count conditionally. */
{
  let count = 0;
  for (let i = 1; i < 16; i++) {
    if (i > 8) {
      count++;
    }
  }
  console.log(count);
}
