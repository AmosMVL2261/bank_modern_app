import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

function CardDeal() {
  return (
	<section className={layout.section}>
    {/* Text Section */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden' /> in few easy steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi orci dui, suscipit eu luctus id, dictum eget urna. Nulla sodales massa a fermentum dignissim. Integer vitae lacus sed nulla volutpat fringilla sed quis libero.
      </p>
      <Button styles="mt-10" />
    </div>
    {/* Image Section */}
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
    </div>
  </section>
  )
}

export default CardDeal