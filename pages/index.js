
import Image from 'next/image';
import Head from 'next/head';
import layouts from '../styles/Home.module.css';
import Fonts from '../src/components/Fonts.module.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import YouTube from 'react-youtube';
import React from 'react';
import Rows from '../styles/rrows.module.css';

export default function Home2() {
  return (
    <div>
      <Head>
        <title>Coders4fu</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       </Head> 
       <div className={layouts.bgimg}>
         
      <h1 className={Fonts.firstpart}>"Não é sobre aprender
a programar e sim
resolver problemas"</h1>

      <h1 className={Fonts.name}>"-Willys Campos"</h1>
      
      <Link href="https://nextjs.org/docs">
        <button className={Fonts.button}>Entre em Contato
          </button>
          </Link>
      </div>
 <div className={layouts.grid}>
   <div className={layouts.card}>
   <h2 className={Fonts.sobrenos}>Sobre Nós</h2>
     <h1 className={Fonts.main}>There Is No Shortcut to Sucess, The Way Is The Work!</h1>
    <p className={Fonts.description}>Em uma iniciativa genuína da Estácio FAP através da coordenação dos cursos de tecnologia, atualmente no comando do Prof. Willys Campos e com parcerias firmadas com os cursos de computação da UFPA – UFRA e IFPA e com a desenvolvedora de startups americana Ikove Startup Nursery nasce o projeto Coders4Future que tem como missão minimizar o “gap” de desenvolvedores e desenvolvedoras de software no mundo de tecnologia através do ensino de programação.</p>
   </div>
  <div> 
    <>
     
      <Image className={layouts.cardy} 
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
  <a>
  <div className={Rows.row}>
   <div className={Rows.column}>
    <div className={Rows.card}>
  <YouTube videoId='TnSXYLR80Tw' className={layouts.cardy}></YouTube>
  </div>
    <div className={Rows.card}>
  <YouTube videoId='j2ecuFWPNZI' className={layouts.cardy}></YouTube>
    </div>
   </div>
  </div>
  </a>
  <div className={layouts.bgmentores}>
  <h3 className={Fonts.mentores} >MENTORES</h3>
  </div>
</div>
  )}
  