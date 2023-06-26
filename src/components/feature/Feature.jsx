import React from 'react'
import './feature.css';

/*render out using  the props  title and text are in gpt4*/ 
const Feature = (props) => {
  return (
    <div className='gpt4__features-container__feature'>
      <div className='gpt4__features-container__feature-title'>
       <div/>
       <h1>{props.title}</h1> 
      </div>
      <div className='gpt4__features-container__feature-text'>
       <p> {props.text}</p>
      </div>
    </div>
  )
}

export default Feature


/* {title} {text} retrive from props  use in const Feature   pass text for whatgpt4 */
