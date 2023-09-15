import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from '../images/phone.svg'

const Hero = () => {

  const { closeSubmenu } = useGlobalContext()

  return (
    <>
      <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className='hero-info'>
            <h1>hii</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, recusandae, nobis facere consequuntur sapiente culpa nihil iusto eaque temporibus cupiditate quos quam aliquam fugit et impedit ad ab voluptate quae.
            </p>
            <button className='btn'>start now</button>
          </article>
          <article className='hero-images'>
            <img src={phoneImg} className='phone-img' alt="phone" />
          </article>
        </div>
      </section>
    </>
  )
}

export default Hero
