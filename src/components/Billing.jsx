import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

function Billing() {
  return (
	<section id='product' className={layout.sectionReverse}>
    {/* In Mobile devices the text go first thanks to the sectionImgReverse class */}
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
      {/* Light Effects */}
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
    </div>
    {/* Text Section */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing & invoicing</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi orci dui, suscipit eu luctus id, dictum eget urna. Nulla sodales massa a fermentum dignissim. Integer vitae lacus sed nulla volutpat fringilla sed quis libero. Etiam feugiat turpis eget mi elementum, et facilisis nisl vulputate.</p>
      {/* App Stores Section */}
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain cursor-pointer' />
      </div>
    </div>
  </section>
  )
}

export default Billing