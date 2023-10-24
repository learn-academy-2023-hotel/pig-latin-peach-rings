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
          } else if(eachWord.includes("qu")){ 
            let indexOfQ = eachWord.indexOf("q") + 2

            let constToQ = eachWord.slice(0, indexOfQ)
            let newWord = eachWord.slice(indexOfQ)
            return newWord + constToQ + "ay" 
            // line 43) calls the data within "vowelsArray" then see's if eachWord includes a voewl at the first index.
            //line 44) returns apple + way, output: appleway
            //line 45-49) creating a new conditional statement determing if eachWord has "qu". we are gonna create a few variables in case it does. 
            //line 46) Determines the first index in which "q" is found. Plus 2 because we're going over 2 index's to find "qu"
            //line 48) ConsToQ is slicing the first index until indexOfQ is met.
            // line 49) create a new variable newWord to keep everything you just sliced.
            // line 50 you call the variables, newWord + constToQ and adding the string "ay". 
          } else if (eachWord.includes("y"))  {
            let indexOfY = eachWord.indexOf("y")
            let constToY = eachWord.slice(0, indexOfY)
            let newWordY = eachWord.slice(indexOfY)
            
            return newWordY + constToY + "ay"
            // We want the code to see if there's no other vowels then y in a word and return that word with "ay" added to the end.
              // return 

          }
        
        
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
