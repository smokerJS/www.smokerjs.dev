'use client';

import { usePathname } from 'next/navigation';
import Path from '@/models/Path';
import Layout from '@/components/Layout';
import BlackTheme from './Black';
import $ from './style.module.scss';

const Themes = () => {
  const pathname = usePathname();
  const isAriaHidden = pathname !== Path.HOME;

  return (
    <>
      <Layout.GNB />
      <div className={$.contents} aria-hidden={isAriaHidden}>
        <BlackTheme />
      </div>
      <div className={$.background} aria-hidden={isAriaHidden} />
    </>
  );
};

export default Themes;
