import $ from './style.module.scss';

const MOCK_POSTS = [
  {
    id: 1,
    title: '제목제목제목제목제제목제목제목제목제',
    tags: ['태그','태그','태그','태그'],
    createdAt: '2022 03 04'
  },
  {
    id: 2,
    title: '제목제목제목제목제제목제목제목제목제',
    tags: ['태그','태그','태그','태그'],
    createdAt: '2022 03 04'
  },
  {
    id: 3,
    title: '제목제목제목제목제제목제목제목제목제',
    tags: ['태그','태그','태그','태그'],
    createdAt: '2022 03 04'
  },
  {
    id: 4,
    title: '제목제목제목제목제제목제목제목제목제',
    tags: ['태그','태그','태그','태그'],
    createdAt: '2022 03 04'
  },
]


interface PostProps {
  id: number;
  title: string;
  tags: string[];
  createdAt: string;
}

const Post = (props: PostProps) => {
  const {id, title, tags, createdAt} = props;
  return (
    <li className={$.post}>
      <strong className={$.post_title}>{title}</strong>
      <span>
        {
          tags.map((tag) => (
            <em key={`post-${id}-${tag}`} className={$.post_tag}>{tag}</em>
          ))
        }
      </span>
      <time className={$.post_created_at}>{createdAt}</time>
    </li>
  )
}


const Posts = () => {
    return (
          <ul className={$.posts}>
            {
              MOCK_POSTS.map(({id, title, tags, createdAt}) => (
                <Post key={`post-${id}`} id={id} title={title} tags={tags} createdAt={createdAt}/>
              ))
            }
          </ul>
    )
}

export default Posts;