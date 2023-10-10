import Link from "next/link";
import Button from "../ui/button";
import { useRouter } from "next/router";
import ArrowIcon from "../icon/arrow-right-icon";

import CalendarIcon from "../icon/calendar-icon";

function PostItem(props) {
    const { id, title, description, topics, image, date, slug } = props;
    const router = useRouter()

    const humainReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });

      const showTopicHandle = () => {
        router.push(`/blog/topics/${slug}`)
      }

  return (
    <li className='m-4 cursor-pointer border-b-2 pb-4'>
        <Button onClick={showTopicHandle}>{topics}</Button>
        <h2 className='text-2xl hover:text-cyan-700 mt-5'>{title}</h2>
        <p className='my-5'>{description}</p>
        <div className='flex justify-between'>
            <Button link={`/blog/${slug}`}><span>Learn More</span> <ArrowIcon /></Button>
            <time className="text-xs flex gap-2 italic items-center"><CalendarIcon className="w-8 h-8"/> {humainReadableDate}</time>
        </div>
    </li>
  )
}

export default PostItem
