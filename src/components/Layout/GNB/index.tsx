import $ from './style.module.scss';
import Link from 'next/link';
import Path from '@/models/Path';

const GNB = () => {
  return (
    <ul className={$.menus}>
        <li className={$.menu}>
            <Link href={Path.BLOG}>
            블로그 가기
            </Link>
        </li>
    </ul>
  );
};

export default GNB;
