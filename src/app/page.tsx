"use client";
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link';

export default function Home() {  

  return (
    <section className='container-body'> 
      <div className="container">
        <div className="wrapper-intro">
          <header className="intro-me">
            <h1>Hola, Soy Jesus! 👨‍💻</h1>
            <p>Bienvenido a mi pedacito en la web 🚀
              <br/>
              Soy Ingeniero Informatico en Peru!

            </p>
          </header>
          <div className="decoration-image">

          </div>
        </div>
      </div>
        <h1>Ultimos posts</h1>

    </section>

  )
}
