import Header from '/src/components/Header.module.css';
import React from 'react';
import { scrollTop } from 'dom-helpers';
import Link from 'next/link';

export default()=>{
    return(
        <header className={Header.header}>
            <div className={Header.headerlogo}>
                <a href="/">
                  <img className={Header.headerlogoimg} src="https://coders4future.com/wp-content/uploads/2021/04/logo1.png"/>
                </a>
            </div>
            <div className={Header.headertopo}>
                <Link href="/#topo">
                TOPO
                </Link>
            </div>
        </header>
    )
}