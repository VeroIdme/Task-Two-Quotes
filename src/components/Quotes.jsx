import React, {useState} from 'react'
import Button from './Button'
import quotes from '../jasons/quotes.json'
import colors from '../jasons/colors.json'
import '../App.css'

const Quotes = () => {
  let random = 1
  const [randomNumber, setRandomNumber] = useState(random)
  const [randomColor, setRandomColor] = useState(random)
  
  const handleStateNumber = () => {
    random = Math.floor(Math.random()*quotes.length)
    let randomCol = Math.floor(Math.random()*colors.length)
    setRandomNumber(random)
    setRandomColor(randomCol)
  }
  return (
    <main style={{background:colors[randomColor].first}}>
      <section className='container' style={ {color: colors[randomColor].first }}>
        <article className='item'>&#8220;</article>
        <article className='quote'>{`${quotes[randomNumber].quote}`}</article> 
        <article className='author'><b>{`${quotes[randomNumber].author}`}</b></article>
        <button  onClick={handleStateNumber} className='btn-item' style={{background:colors[randomColor].first}}><Button /></button>
      </section>
    </main>
  )
}

export default Quotes