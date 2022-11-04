import React, { useState } from 'react'
import styles from '../../styles/Header.module.css';
import { css} from '@emotion/css';
import styled from '@emotion/styled';
import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';

const HeaderPage = styled.header`
background-color: #e1e1e1;
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10%;
`





//CSS
// 5 maneiras diferentes de utilizar css
// 1 - importar o css no arquivo .tsx
// import './Header.css'
// 2 - Utilizando Css modules
// import styles from './Header.module.css'
// 3 - Utilizando styled-components ou Sass
// import styled from 'styled-components'
// 4 - Utilização direto do componente
// Utilizando o CSS-in-JS
// 5 - Usando alguma biblioteca de estilização
// Ex: Material-UI - Emotion Css

type HeaderProps = {
  menu?: Array<string>;
  pesquisar?: string;
  name?: string;
}

// type UserType = {
//   email: string;
//   password: string;
// }

// type User = HeaderProps | UserType;

// interface IHeaderProps {
//   menu?: Array<string>;
//   pesquisar?: string;
//   name?: string;
// }

export default function Header(props:HeaderProps) {

  //Sempre que vamos trabalhar com state, para armazenar valores
  // temos o getters & setters.
  const [userAuth, setUserAuth] = useState<boolean>(true);
  const [nameUser, setNameUser] = useState<string | undefined>(props.name);

  return (
   // <header className={styles['menu-site']}> - utilizando CSS modules
        <HeaderPage>
        <div>Logotipo</div>
        <nav>
            <ul className={ css`
            width: 90%; 
            display: inline-flex; 
            margin:0px
            padding:0;
            >li {
              min-width: 80px;
              text-align: center;
              list-style: none;
            }
           `}>
              <li>Home</li>
              <li>Produtos</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
        </nav>

        {userAuth && (<div>
          <span>Seja bem vindo {nameUser?nameUser:" visitante"}</span>
        </div>)}
        <div>
        <Input type='text' placeholder='Pesquisar'/>
        <Button disabled>{props.pesquisar? props.pesquisar:"Search"}</Button>
        </div>
        </HeaderPage>
 //   </header>
  )
}
