'use client';

import { WheelEventHandler, useRef, useState } from 'react';
import $ from './style.module.scss';
import Category from './Category';

const BlogPageContents = () => {
  const [indexes, setIndexes] = useState([1, 2, 3, 4, 5]);
  const $throttle = useRef(false);

  const handleNext = () => {
    const newIndexes = [...indexes];
    newIndexes.push(newIndexes.shift() || 0);
    setIndexes(newIndexes)
  }

  const handlePrev = () => {
    const newIndexes = [...indexes];
    newIndexes.unshift(newIndexes.pop() || 0);
    setIndexes(newIndexes);
  }

  const hadleWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    if ($throttle.current) return;
    if (!$throttle.current) {
      $throttle.current = true;
      if (event.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setTimeout(() => {
        $throttle.current = false;
      }, 300);
    }
  }

  return (
    <div className={$.container} onWheel={hadleWheel}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <div className={$.category_backgorund}/>
      <Category index={indexes[0]}/>
      <Category index={indexes[1]}/>
      <Category index={indexes[2]}/>
      <Category index={indexes[3]}/>
      <Category index={indexes[4]}/>
    </div>
  );
};
export default BlogPageContents;
