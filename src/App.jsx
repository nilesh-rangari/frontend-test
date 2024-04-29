import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import flower from './assets/flower image large.png'

import './App.css'

let longTextPara = "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."
let shortTextPara = "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."



function App() {
  const [longText, setLongText] = useState(false)
  
 let paragraph = longText ? longTextPara : shortTextPara

  return (
    <>
    <div>
        <button type='button' className='text-red-500 bg-green-400' onClick={() => setLongText(!longText)}>Longtext</button>
    </div>
        <div className='px-[15px] '>
        {/* grid grid-cols-12 */}
            <div className="bg-[black] text-[white] grid grid-cols-12 md:gap-[30px] ">
            {/* col-span-8  */}
                <div className="col-span-12 md:col-span-7 mt-6 md:mt-0">
                    <h1 className="text-[28px] md:text-[32px] mb-2 font-bold">Title Text 2 (Module Title)</h1>
                    <h2 className="my-2 text-[20px] md:text-24px font-normal">Caption or Subtitle of Module</h2>
                    <p className='mt-4 mb-2 text-[16px] font-normal'>
                        {paragraph}
                    </p>
                    <p className='mt-3 text-[14px]'>Read More</p>
                    <div className='flex flex-col min-[376px]:flex-row gap-6'>
                        <button className='py-1 text-[#00FFC5] mt-6 w-[180px] text-left pr-2'>Text Link</button>
                        <button className='py-1 text-[#00FFC5] mt-6 w-[180px] text-left pr-2'>Text Link</button>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-5 order-first md:order-1">
                    <img src={flower} alt="flower" className="w-full" />
                </div>
            </div>
        </div>
    </>
  )
}

export default App
