
import Image from 'next/image';
import Head from 'next/head';
import layouts from '../styles/Home.module.css';
import Fonts from '../src/components/Fonts.module.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import YouTube from 'react-youtube';
import React from 'react'
export default function Home2() {
  return (
    <div>
      <Head>
        <title>Coders4fu</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       </Head> 
       <main className={layouts.bgimg}>
       <div>
      <h1 className={Fonts.firstpart}>"Não é sobre aprender
a programar e sim
resolver problemas"</h1>

      <p className={Fonts.name}>"-Willys Campos"</p>
      
      <Link href="https://nextjs.org/docs">
        <button className={Fonts.button}>Entre em Contato
          </button>
          </Link>
      </div>
      </main>
 <div className={layouts.grid}>
   <div className={layouts.card}>
   <h2 className={Fonts.sobrenos}>Sobre Nós</h2>
     <h1 className={Fonts.main}>There Is No Shortcut to Sucess, The Way Is The Work!</h1>
    <p className={Fonts.description}>Em uma iniciativa genuína da Estácio FAP através da coordenação dos cursos de tecnologia, atualmente no comando do Prof. Willys Campos e com parcerias firmadas com os cursos de computação da UFPA – UFRA e IFPA e com a desenvolvedora de startups americana Ikove Startup Nursery nasce o projeto Coders4Future que tem como missão minimizar o “gap” de desenvolvedores e desenvolvedoras de software no mundo de tecnologia através do ensino de programação.</p>
   </div>
  <div> 
    <>
     
      <Image 
        src="/image/sobre-nos-tecnologia.jpg"
        alt="Picture"
        width={450}
        height={300}
      />
     
    </>
  </div>
 
</div>
 <h2 className={Fonts.aulas}>Aulas Gravadas </h2>
 <p className={Fonts.aulassub}>Assista abaixo as aulas inaugurais</p>
  <a className={layouts.grid}>
  <YouTube videoId='TnSXYLR80Tw'></YouTube>
  <YouTube videoId='j2ecuFWPNZI'></YouTube>
  </a>
  <div className={layouts.bgmentores}>
  <h3>MENTORES</h3>
  </div>
</div>
  )}
  