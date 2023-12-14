'use client';

import { useState } from 'react';
import $ from './style.module.scss';

const BlogPageContents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex(currentIndex + 1)
  }


  return (
    <div className={$.container} onClick={handleClick}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>


      <div className={`${$.category} ${$[`s${currentIndex + 1}`]}`}>카테고리</div>
      <div className={`${$.category} ${$[`s${currentIndex + 2}`]}`}>카테고리</div>
      <div className={`${$.category} ${$[`s${currentIndex + 3}`]}`}>카테고리</div>
      <div className={`${$.category} ${$[`s${currentIndex + 4}`]}`}>카테고리</div>
      <div className={`${$.category} ${$[`s${currentIndex + 5}`]}`}>카테고리</div>
    </div>
  );
};
export default BlogPageContents;
