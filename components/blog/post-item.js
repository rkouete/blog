import Link from "next/link";
import Button from "../ui/button";
import { useRouter } from "next/router";
import ArrowIcon from "../icon/arrow-right-icon";

import classes from "./post-item.module.css";
import CalendarIcon from "../icon/calendar-icon";

function PostItem(props) {
    const { id, title, description, topics, image, date } = props;
    const router = useRouter()

    const humainReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });

      const showTopicHandle = () => {
        router.push(`/blog/topics/${topics}`)
      }

  return (
    <li className='m-4 cursor-pointer'>
        <Button onClick={showTopicHandle}>{topics}</Button>
        <h2 className='text-2xl hover:text-green-700 mt-5'>{title}</h2>
        <p className='my-5'>{description}</p>
        <div className='flex justify-between'>
            <Button link={`/blog/${id}`}><span>Learn More</span> <ArrowIcon /></Button>
            <span className="text-xs flex gap-2 italic"><CalendarIcon className="w-8 h-8"/> {humainReadableDate}</span>
        </div>
    </li>
  )
}

export default PostItem
