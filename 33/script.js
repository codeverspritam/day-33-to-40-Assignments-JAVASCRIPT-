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