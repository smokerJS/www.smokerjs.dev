import $ from './layout.module.scss';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={$.container}>
      <div className={$.contents}>{children}</div>
    </div>
  );
};

export default BlogLayout;
