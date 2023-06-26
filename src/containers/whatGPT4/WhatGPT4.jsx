import React from 'react';
import './whatGPT4.css'
import { Feature } from '../../components';

/* import feature component and use props and export gptr feature from feature    and   id wgpt4 helps to redirect from navbar*/
const WhatGPT4 = () => {
  return (
    <div  className='gpt4__whatgpt section__margin' id="wgpt4">
      <div className='gpt4__whatgpt-feature'>
        <Feature title="What is GPT-3"  text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>

      <div className='gpt4__whatgpt-heading'>
       <h1 className='gradient__text'>The possibility are beyond your imagination</h1>
       <p>Explore The Library</p>
      </div>

      <div className='gpt4__whatgpt-container'>
        <Feature title="Chatbot" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
        <Feature title="Knowledgebase"  text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />

      </div>
      
    </div>
  )
}

export default WhatGPT4
