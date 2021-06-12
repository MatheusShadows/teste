import Image from 'next/image';
import lista from '/src/components/monitores.module.css'
const names=['Willys Campos - CTO (DiretoTech)'
,'Natalia Araujo - Desenvolvedora Backend Junior (DiretoTech)'
,'Felipe Costa - Desenvolvedor Frontend Estagiário (DiretoTech)'
,'Marcely Anjos - Desenvolvedora Frontend Estagiária (DiretoTech)'
,'Jeferson Silva - Desenvolvedor Junior'
,'Junior Farias - Desenvolvedor Backend (DiretoTech)'
,'Josiane Ferreira - Desenvolvedora Backend Sênior (SETRANSBEL)'
,'Tulyo Ribeiro - Application Engineer (Ikove Brazil)'
];
const images=['../image/m2.png','../image/m3.png','../image/m4.png','../image/m5.png','/image/m6.png','../image/m7.png','../image/m8.png','../image/m9.jpeg'];


export default () => {
    return(
      
    <div>
     <div className={lista.listarea}>
      <div className={lista.list}>
        <div className={lista.item}>
           {images.map((images,key)=>(
          <img className={lista.card} src={images}/>
           ))}<div>
           {names.map((names,key)=>(
          <div className={lista.cardtxt}>{names}</div>
           ))}
          </div>
        </div>
      </div>
     </div>
     
    </div>
    
    )
  }