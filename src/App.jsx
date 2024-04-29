import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import flower from './assets/flower image large.png'

import './App.css'

let longTextPara = "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."
let shortTextPara = "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."



function App() {
  const [longText, setLongText] = useState(false)
  const [colSpan, setColSpan] = useState(12)
  
 let paragraph = longText ? longTextPara : shortTextPara
 let colSpanCol = `col-span-${colSpan.toString()}`

 let textSpan = (colSpan === 12) ? "col-span-7" : colSpanCol
 let imgSpan = (colSpan === 12) ? "col-span-5" : `${colSpanCol} grid-cols-subgrid col-start-1`
 



  return (
    <>
    <div className='hidden lg:block px-[15px] lg:px-[80px]'>
        <button type='button' className='text-black bg-white px-3 py-5' onClick={() => setLongText(!longText)}>Longtext</button>
        <button type='button' className='text-black bg-white px-3 py-5' onClick={() => setColSpan(12)}>12 col</button>
        <button type='button' className='text-black bg-white px-3 py-5' onClick={() => setColSpan(8)}>8 col</button>
        <button type='button' className='text-black bg-white px-3 py-5' onClick={() => setColSpan(6)}>6 col</button>
        <button type='button' className='text-black bg-white px-3 py-5' onClick={() => setColSpan(4)}>4 col</button>
    </div>

    <div className='hidden lg:block bg-[black] text-[white] px-[15px] lg:px-[80px]'>
            <div className='grid grid-cols-12 col-auto gap-[30px]'>
                        <div className={`${textSpan}  mt-6 md:mt-0`}>
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

                        <div className={`${imgSpan}  order-1`}>
                            <img src={flower} alt="flower" className="w-full" />
                        </div>
            </div>
        </div>

        {/* second */}

        <div className='block lg:hidden bg-[black] text-[white] px-[15px] lg:px-[80px]'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12'>
                    <div className=" grid grid-cols-12 md:gap-[30px]">
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
            </div>
        </div>
    </>
  )
}

export default App
