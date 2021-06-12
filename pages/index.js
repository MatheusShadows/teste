
import Image from 'next/image';
import Head from 'next/head';
import layouts from '../styles/Home.module.css';
import Fonts from '../src/components/Fonts.module.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import YouTube from 'react-youtube';
import Rows from '../styles/rrows.module.css';
import Monitores from '../src/components/monitores';
import Header from '../src/components/Header';
import React, { useEffect, useState } from 'react';


export default function Home2() {
  return (
       <div>
      <Head>
        <title>Coders4fu</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       </Head>
       <Header/>
       <a id="topo"/>
       <div className={layouts.bgimg}>
         
      <h1 className={Fonts.firstpart}>"Não é sobre aprender
a programar e sim
resolver problemas"</h1>

      <h1 className={Fonts.name}>"-Willys Campos"</h1>
      
      <Link href="#contato">
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
      <Monitores />
  </div>

  <div>
    <h2 className={Fonts.aulassub}>Depoimentos</h2>
    <div className={Rows.rowd}>
      <div className={Rows.columnd}>
       <div className={Rows.cardd}>
      <img className={Rows.img} src="../image/d2.jpg"/>
      <h2>André Leal</h2><h3>Aluno do curso</h3>
      <p className={Fonts.description}>O investimento em conhecimento é o melhor que se pode fazer em tempos de pandemia. Coders4Future(HTML,CSS e JS), Excelente aprendizado. Grato ao professor Willys Campos pela dedicação e boa vontade.</p>
       </div>
       <div className={Rows.cardd}>
      <img className={Rows.img} src="../image/d3.jpg"/>
      <h2>Pedro Braga</h2><h3>Aluno do curso</h3>
      <p className={Fonts.description}>Sigo firme nessa jornada, obrigado pelo conhecimento compartilhado até aqui Willys</p>
       </div>
       <div className={Rows.cardd}>
      <img className={Rows.img} src="../image/d4.jpg"/>
      <h2>Suellen Jucá</h2><h3>Aluno do curso</h3>
      <p className={Fonts.description}>Maravilhosa iniciativa do Prof. Willys. Sabemos que com a alta demanda do mercado de TI,buscando profissionais flexíveis em relação às tecnologias nos quais trabalham, com o surgimento de novas ferramentas, novos processos ou novos métodos, de modo que fica difícil aprender tudo. Contudo, estar disposto a aprender se torna fundamental para evoluir como profissional. Agradeço seu trabalho.</p>
       </div>
      </div>
    </div>
  </div>
  <div className={layouts.bgapoiadores}>
    <h2 className={Fonts.apoiadores}>
      Apoiadores
    </h2>
    <p className={Fonts.colab}>Essa iniciativa conta com a colaboração de empresa parceiras</p>
    <a className={layouts.banners} href='https://www.ikovecapital.com/'>
     <Image
     src="/image/a2.png"
     alt="a2"
     width={400}
     height={130}
     />
    </a>
    <a className={layouts.banners} href='https://estacio.br/'>
     <Image
     src="/image/a3.png"
     alt="a2"
     width={400}
     height={190}
     />
    </a>
    <a className={layouts.banners} href='https://direto.tech/'>
     <Image
     src="/image/a4.png"
     alt="a2"
     width={400}
     height={130}
     />
    </a>
  </div>
  <a id="contato"/>
  <div className={layouts.contato}>
    <h2 className={Fonts.aulas}>Contato</h2>
    <form  action="/pagina-processa-dados-do-form" method="post">
    <div>
        <label className={layouts.textbox} for="nome">Nome:</label>
        <input className={layouts.input} type="text" id="nome" />
    </div>
    <div>
        <label className={layouts.textbox} for="email">E-mail:</label>
        <input className={layouts.input} type="email" id="email" />
    </div>
    <div>
        <label className={layouts.textbox} for="msg">Mensagem:</label>
        <textarea className={layouts.text} id="msg"></textarea>
    </div>
    <button type="submit" className={Fonts.button}>Enviar
          </button>
</form>
  </div>
</div>
  )}
