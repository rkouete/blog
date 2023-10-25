import React, { useContext} from 'react'
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ThemeContext from '../../store/theme-context';
import PostTags from './post-tags';
import Comments from '../input/comments';

/* paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>
    } */

function PostContent(props) {
  const themeCtx = useContext(ThemeContext);
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    img(image) {
        return (
          <span className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.src}`}
              alt={image.alt}
              width={0}
              height={0}
              layout='responsive'
              priority
            />
          </span>
        );
    },
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, '')}
          style={atomDark}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }

  return (
    <div className={themeCtx.theme === 'DARK' ? classes.darkContainer : classes.lightContainer}>
      <PostHeader title={post.title} tags={post.tags} topics={post.topics} date={post.date} image={imagePath} />
      <ReactMarkdown components={customRenderers} className={classes.content}>{post.content}</ReactMarkdown>
    </div>
  )
}

export default PostContent
