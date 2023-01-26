import React from 'react'

const App = () => {
  function validateLuhn(cardNumber) {
    console.log(typeof cardNumber);
    //let reversedCardNumber = cardNumber.split("");
    let total = 0;
    let myArr = String(cardNumber)
      .split("")
      .map((cardNumber) => {
        return Number(cardNumber);
      }).reverse();
    console.log(myArr);
    for (let i = 0; i < myArr.length; i++) {
     // console.log("hello",parseInt(myArr[i]));

      let currentNumber = parseInt(myArr[i]);
      if (i % 2 === 1) {
        currentNumber *= 2;
        if (currentNumber > 9) {
          currentNumber -= 9;
        }
      }
      total += currentNumber;
    }
      if (total % 10 === 0) {
    return true;
  } else {
    return false;
  }
  } 
  
  console.log(validateLuhn(1234567890123456));

  console.log(validateLuhn(4408041234567893));

  console.log(validateLuhn(38520000023237));

  console.log(validateLuhn(4222222222222));
  return (
    <div>
      
    </div>
  )
}

export default App


