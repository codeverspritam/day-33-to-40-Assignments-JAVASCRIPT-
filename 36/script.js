/*Print only first 3 odd number from 1 to 20 Use loop. stop with break after 3 odd prits. */
{
  let counter = 0;
  for (i = 1; i < 21; i++) {
    if (counter === 3) break;
    if (i % 2 === 0) {
      console.log(i);
      counter++;
    }
  }
}

/* Ask user 5 numbers. Count how many are positive
Use loop + condition + counter. */
{
  let count = 0;
  for (let i = 1; i < 6; i++) {
    let num = +prompt("enter 5 number");
    if (num >= 20) break;
    if (num >= 0) count++;
  }
  console.log(count);
}
/* ATM Simulator – Allow 3 withdrawals
Start with ₹1000 balance. Ask withdrawal amount 3 times.
If enough balance → deduct
Else → print “Insufficient balance”. */
{
  let balance = 1000;
  let counter = 0;
  while (balance > 0 && counter !== 3) {
    let withdraw = +prompt("withdorw how much ? ");
    counter++;
    balance -= withdraw;
  }
  if (balance < 0) {
    console.log("insufficient Amount");
    console.error("your balance =  0/- ");
  }
}
// Other senario

/* if account balance is completly zero then only it will stop (counter = 0 balance) */
{
  let balance = 1000;
  let counter = 0;
  while (balance > 0 && counter !== balance) {
    let withdorw = +prompt("withdorw how much ? ");
    counter++;
    balance -= withdorw;
  }
  if (balance < 0) {
    console.error("no balance");
  }
}