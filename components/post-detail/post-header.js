import Image from 'next/image'
import classes from './post-header.module.css';

function PostHeader(props) {
  return (
    <div>
      <Image className={classes.image} src={props.image} alt={props.title} width={900} height={500}/>
      <div className={classes.body}>
        <div>
          <h4 className={classes.title}>{props.title}</h4>
          <p className={classes.date}>{props.date}</p>
        </div>
        <span className={classes.topics}>{props.topics}</span>
      </div>
    </div>
  )
}

export default PostHeader
