/*Allow only 3 attempts to enter correct password
If user gets it right early, stop. If not → “Account locked”.  */

// method 1
{
  let correctPassword = "admin123";
  let first = prompt("Enter your password:");
  if (first === correctPassword) {
    console.log("done");
  } else {
    let second = prompt("Incorrect password. Try again:");
    if (second === correctPassword) {
      console.log("done");
    } else {
      let third = prompt("Incorrect password. Last attempt:");
      if (third === correctPassword) {
        console.log("done");
      } else {
        console.error("acount locked");
      }
    }
  }
}
// method 2
{
  let attempt = 0;
  let correctPassword = "admin123";
  let userpassword = prompt("Enter your password:");
  attempt++;
  while (correctPassword !== userpassword) {
    if (attempt === 3) {
      console.error("account locked");
      break;
    }
    userpassword = prompt("Incorrect password. Try again:");
    attempt++;
  }
}
// method 3
{
  let attempt = 0;
  let correctPassword = "admin123";
  let userpassword = prompt("Enter your password:");
  attempt++;
  while (correctPassword !== userpassword && attempt < 3) {
    userpassword = prompt("Incorrect password. Try again:");
    attempt++;
  }
}

/* Ask user for words until they type “stop”. Count how many times they typed “yes”
Loop until "stop" is typed. Count "yes".*/
{
  let word = prompt("word bolo");
  let counter = 0;

  while (word !== "stop") {
    if (word === "yes") counter++;
    word = prompt("word bolo");
  }
  console.log(`total times yes count : ${counter}`);
}

/* Print numbers divisible by 7 from 1 to 50
Use modulo % and loop. */
{
  for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
      console.log(i);
    }
  }
}

/*Sum of all odd numbers from 1 to 30
Add only odd numbers. Print final sum. */
{
  for (let i = 1; i <= 30; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
