import React from 'react';
import './blog.css';
import {Article} from '../../components';
import { blog01, blog02, blog03, blog04,blog05 } from './import';

//blog01 to blog05 imported from  article import js  attach to img url

// <Article imgUrl={blog02} date="dec 12 2022" title="Hello" />  used date and title in Article.js

const Blog = () => {
  return (
    <div className='gpt4__blog section__padding' id='blog'>
      <div className='gpt4__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt4__blog-container'>
        <div className='gpt4__blog-container__groupA'>
           <Article imgUrl={blog01} date="sep 21 2022" title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        </div>
        <div className='gpt4__blog-container__groupB'>
           <Article imgUrl={blog02} date="dec 12 2022" title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
           <Article imgUrl={blog03} date="jan 21 2022" title="GPT-3 and Open  AI is the future. Let us explore how it is?lo" />
           <Article imgUrl={blog04} date="march 15 2022" title="GPT-3 and Open  AI is the future. Let us explore how it is?ello" />
           <Article imgUrl={blog05} date="julu 04 2022" title="GPT-3 and Open  AI is the future. Let us explore how it is?" />

        </div>
      </div>
    </div>
  )
}

export default Blog
