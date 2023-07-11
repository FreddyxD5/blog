"use client";
import Image from 'next/image'
import { useState,useEffect } from 'react'
import Link from 'next/link';
import BlogItems from './components/card';
import StackItems from './components/stackItem';
import Footer from './components/Footer';


// async function getData() {
//   const res = await fetch('https://api.example.com/...')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

const data_blog = [
  {
    "id":1,
    "title":"Como implementar correctamente un serializer",
    "content":"lorem ipsum dolor sit amet, consectetur adipis",
    "slug":"holitas-de-mar",
    "date":"20 Febrero, 2023",
  },
  {
    "id":2,
    "title":"Las ventajas y desventajas de usar el ORM de Django",
    "content":"lorem ipsum dolor sit amet, consectetur adipis",
    "slug":"holitas",
    "date":"20 Marzo, 2023",
  }
]
const data_stack = [
  {
    "id":1,
    "title":"Python",
    "content":"lorem ipsum dolor sit amet, consectetur adipis",
    "slug":"holitas-de-mar",
    "date":"20 Febrero, 2023",
  },
  {
    "id":2,
    "title":"Javacript",
    "content":"lorem ipsum dolor sit amet, consectetur adipis",
    "slug":"holitas",
    "date":"20 Marzo, 2023",
  },
  {
    "id":3,
    "title":"Django",
    "content":"lorem ipsum dolor sit amet, consectetur adipis",
    "slug":"holitas",
    "date":"20 Marzo, 2023",
  },
  {
    "id":3,
    "title":"React",
    "content":"lorem ipsum dolor sit amet, consectetur adipis",
    "slug":"holitas",
    "date":"20 Marzo, 2023",
  }
]


export default function Home() {  
  const [datosBlog, setDatosBlog] = useState(data_blog)  
  const [datosStack, setDatosStack] = useState(data_stack)  

  return (   
    <>
    <section className='container-body'> 
      <div className="container">
        <div className="wrapper-intro">
          <header className="intro-me">
            <h1>Hola, Soy Jesus! 👨‍💻</h1>
            <p className="font-source">Bienvenido a mi pedacito en la web 🚀
              <br/>
              Soy Desarrollador de Software, Bienvenido a mi pedacito en la web
              Bienvenido a mi pedacito en la web
              Bienvenido a mi pedacito en la web
              Bienvenido a mi pedacito en la web
              Bienvenido a mi pedacito en la web
              Bienvenido a mi pedacito en la web
              Bienvenido a mi pedacito en la web
              
            </p>
          </header>
          <div className="decoration-image">
            <img src="/img/Dev.png" className='image-intro' alt="Dev python"/>
          </div>
        </div>
      </div>        
      <section className='blog-content'>
        <h1 className='font-source latest-post-title'>Ultimos posts</h1>
        <div className='latest-post'>
          { datosBlog && datosBlog.length>0 ? 
                datosBlog.map((info)=>(                  
                    <BlogItems data={info} key={info.id}/>                  
                  )) : <h1>No info</h1>
          }
          </div>
      </section>
      <section className='stack-content'>
        <h1 className='font-source latest-post-title'>Stack</h1>
        <div className='stack-items'>
        {
          datosStack && datosStack.length>0?
          datosStack.map((data)=>(
            <StackItems data={data}  key = {data.id}/>
          )): <h1>No infoo</h1>
        }
        </div>
        
      </section>
    </section>
    
    </> 
  )
}

