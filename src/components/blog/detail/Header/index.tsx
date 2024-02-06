import $ from './style.module.scss';

const MOCK_TAGS = [
  '태그',
  '태그',
  '태그',
  '태그',
  '태그',
]

const Header = () => {
  return (
    <div className={$.container}>
      <h1 className={$.title}>제목제목제목제목제목</h1>
      <p className={$.description}>디스크립션디스크립션디스크립션디스크립션디스크립션디스크립션디스크립션디스크립션디스크립션디스크립션</p>
      <div className={$.metas}>
        <span className={$.tags}>
          {
            MOCK_TAGS.map((tag) => (
              <em key={`tag-${tag}`} className={$.tag}>{tag}</em>
            ))
          }
        </span>
        <time className={$.created_at}>2022 09 03</time>
      </div>
    </div>
  );
};
export default Header;
