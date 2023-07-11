import {Card} from '@nextui-org/react'
import Link from "next/link"
import Image from 'next/image'



const StackItems = ({data}:any)=>{
    return(
        <>        
        <div className='card-item font-source'>            
            <div className='card-image'>
                <Image
                    src="/img/python.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                />
            </div>               
            <div className='card-body'>
                <h3 className=''>{data.title}</h3>            
            </div>
        </div>            
        
        </>        
    )
}
export default StackItems;   