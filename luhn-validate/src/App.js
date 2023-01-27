import React, { useState, useEffect } from 'react'

const App = () => {
   const [updated, setUpdated] = useState("");
  // const [isValid, setIsValid] = useState(null);

  // useEffect
  useEffect(() => {
 validateLuhn()
  
  },[updated])

  function validateLuhn() {
    // console.log("number",typeof cardNumber);
    //let reversedCardNumber = cardNumber.split("");
    let total = 0;
    let myArr = String(updated)
      .split("")
      .map((updated) => {
        return Number(updated);
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
        console.log(true)
    //return true;
  } else {
    console.log(false);
    //return false;
  }
  } 
  
 
 // console.log(validateLuhn(1234567890123456));

  // console.log(validateLuhn(4408041234567893));

  // console.log(validateLuhn(38520000023237));

  // console.log(validateLuhn(4222222222222));


  return (
    <div>
      <label>
        Credit Card:
        <input type="text" name="credit-card" onChange={(e) => setUpdated(e.target.value)} value={updated} />
      </label>
      {/* <input onClick={validateLuhn(updated)} type="submit" value="Submit" /> */}

      {/* {isValid === true ? <p>Card number is valid</p> : null}
      {isValid === false ? <p>Card number is not valid</p> : null} */}
    </div>
  );
}

export default App


