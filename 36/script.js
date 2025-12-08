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