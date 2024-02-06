'use client';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import $ from './style.module.scss';

const DetailPageContents = () => {


  return (
    <div className={$.container}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
export default DetailPageContents;
