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