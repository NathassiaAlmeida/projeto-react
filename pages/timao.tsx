import { setDefaultResultOrder } from 'dns';
import {NextPageContext} from 'next';
import React, {useEffect, useState} from 'react'

type TimaoProps = {
    frase: string;
    autor ?: string
}

async function getFrase(){
  const res = await fetch('https://type.fit/api/quotes');
  const data = await res.json();
  const position =Math.floor(Math.random() * data.length);
  const frase = data[position].text;
  const autor = data[position].autor;

  return {
    frase, autor
  }

}

export default function Timao(props:TimaoProps) {
    const [frase, setFrase] = useState<string | undefined>(props.frase)
    const [autor, setAutor] = useState<string | undefined>(props.autor)
    let contador = 0;
    useEffect(()=>{

      getFrase().then((data)=>{ console.log(`Executou ${contador} vez`, data);});
      contador++;      
     
  },[frase, autor]);

    return (
      <>
    <h1>{frase?frase:"Seja muito bem vinda!"}</h1>
    {autor &&<h2>{autor}</h2>}

    <button onClick={(e)=>setAutor("Nathássia Almeida")}>Mudar Autor</button>
    <button onClick={(e)=>setFrase("Capricho é fazer o melhor que você pode, na condição que você tem, enquanto não tem condições melhores para fazer melhor ainda!")}>Muda Frase</button>

    </>
  )
}

//DRY - Don't Repeat Yourself

Timao.getInitialProps = async (ctx: NextPageContext) => {

  const res = await fetch('https://type.fit/api/quotes');
  const data = await res.json();
  const position =Math.floor(Math.random() * data.length);
  const frase = data[position].text;
  const autor = data[position].author;
  return {
      frase,
      autor
  }
}








