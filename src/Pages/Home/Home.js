import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
    return (
    <div className='global-container'>
      <h1 className='home-title'>
        Bienvenue au <span>Shop</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos rem tempora blanditiis ipsam incidunt non ex officia asperiores mollitia, natus in et sint saepe, neque eligendi similique nulla iure.
      </p>
      <img src={imgHomeShop} alt="accueil shop" />
    </div>
    )
  }
