import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    ""
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return ( 
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
      
      // Here we want to create a function that allows us to take the first instance of a vowel and then remove that vowel

      // const pigLatin = (vowelsArray) => {
        // return vowelsArray.join('').toLowerCase(0)
      // }

      
          if(vowelsArray.includes(eachWord[0])){
            return eachWord + 'way' 
          }else if(vowelsArray.includes()){ 
            return eachWord.slice()//where vowel starts) + .push + 'ay' //squire move squ to move to the end of the word + ay = return iresquay
          }
        
          new array = []
        for (let i < 0; i< eachWord.length, i++){
          if 
        }
        retun new Array
        .push(value)

        whatever is sliced gets put into a new array

        equals -> squirrel -> pulls out qu into a new array 
        

        newArray = [q, u]
          // if (eachWord[0] === vowelsArray[0]]{
          //   return 
          // })
      
      
    //    if (if word === vowel{
    //     return every letter before that vowel to be pushed to the end of the word + concat ay ex: eachPay Peach -> each (input method to add every word to the end) = eachP +  .concat or + 'ay' eachPay
    //   } else if (if vowel index === 0){
    //     return concat the string yay to the end of the word
    //   } else if (if the word only includes 1 y)
    //   return every letter before that vowel to be pushed to the end of the word + concat ay ex: eachPay
    // }else if ( word !== vowel){
    //   return word
    


            // ACTION ITEM: this return will be the output of your Pig Latin'd code

            // pulling out vowel + charAt + slice + ay
            // Here you want your word to come back .slice + ay at the end 
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App
