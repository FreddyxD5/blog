import { useRouter } from 'next/router' 
import { useSearchParams } from 'next/navigation'


interface IProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

export default function BlogDetails({params}:IProps) {    
  return (
    <main>        

      <h1 className='text-sm font-source'>Detail Blog something {params.slug} siuuu </h1>
    </main>  
  )
}