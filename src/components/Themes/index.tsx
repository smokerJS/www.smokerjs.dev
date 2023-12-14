'use client';

import { usePathname } from 'next/navigation';
import Path from '@/models/Path';
import BlackTheme from './Black';
import $ from './style.module.scss';

const Themes = () => {
  const pathname = usePathname();
  const isAriaHidden = pathname !== Path.HOME;

  return (
    <>
      <div className={$.contents} aria-hidden={isAriaHidden}>
        <BlackTheme />
      </div>
      <div className={$.background} aria-hidden={isAriaHidden} />
    </>
  );
};

export default Themes;
