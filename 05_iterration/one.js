// for

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`---------------outer loop----------- ${i}`);

//     for (let j = 1; j <= 10; j++) {
//         console.log(`inner loop ${j}`);
//     }
// }

// ---------------------------------- break and continue -------------------------

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`My favorite no. is :  ${i}`);
//     break;
//   }
//   console.log(i);
// }



for (let i = 1; i <= 20; i++) {
    if (i == 5) {
      console.log(`My favorite no. is :  ${i}`);
      continue;
    }
    console.log(i);
  }
  