import $ from './style.module.scss';




const Footer = () => {
  return (
    <div className={$.footer}>
      <div className={$.info}>
        <strong className={$.category_name}>Component Category</strong>
        <button className={$.index_button}>목록</button>
      </div>
      <ul className={$.other_posts}>
        <li className={$.other_post} data-page="ss">
          <strong>
            제목제목제목제목제목제목제목
          </strong>
        </li>
        <li className={$.other_post}>
          <strong>
            제목제목제목제목제목제목제목
          </strong>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
