import {Card} from '@nextui-org/react'
import Link from "next/link"



const BlogItems = ({data}:any)=>{
    return(
        <>
        <Link href={`/post/${data.id}/`} className='link-container font-source'>
            <h3 className='post-item '>{data.title}</h3>
            <time >{data.date}</time>
        </Link>            
        
        </>        
    )
}
export default BlogItems;   