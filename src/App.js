import React from "react"
import './App.css'
import Header from "./components/Header.js"
import Section from "./components/Section.js"
import MemeImage from "./components/MemeImage.js"


// FETCHING AND ADDING RANDOM MEMES IS REMAINING url= "https://api.imgflip.com/get_memes"



function App() {
  const [memeDataObj, setMemeDataObj] = React.useState({})
  const [memeData, setMemeData] = React.useState(
    {
      topText: "",
      bottomText: "",
      memeImg: "http://i.imgflip.com/1bij.jpg"
  })

  React.useEffect(function() {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(memesData => setMemeDataObj(memesData.data.memes))
  }, [])

  async function getRandomMeme() {
    const memeObjLength = await memeDataObj.length
    const randomNumber = Math.floor(Math.random() * memeObjLength)
    const randomMeme = memeDataObj[randomNumber]

    setMemeData(prevDataObj => {
      return {
        ...prevDataObj,
        memeImg: randomMeme.url
      }
    })
  }

  console.log(memeData)
  function onFormDataChange(event) {
    const {name, value} = event.target
    
    setMemeData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }
  
  return (
    <>
      <Header />

      <main className="main">

        <Section 
        onButtonClick={getRandomMeme}
        formDataProp={memeData}
        onFormDataChange={onFormDataChange}
         />

        <MemeImage
        memeImage={memeData.memeImg}
        formDataProp={memeData}
        />

      </main>
    </>
  )
}

export default App
