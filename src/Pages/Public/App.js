import React from 'react'
import logo from '../../logo.svg';
import GenContent from '../../includes/enums/App/GeneralContent';

function App() {

  const arr_img_services =[
    {title:"webP Converter",url:"/"},
    {title:"Crop IMG",url:"/services"},
    {title:"Remove BG",url:"/contact-us"},
  ]

  const arr_other =[
    {title:"Private Message",url:"/"},
    {title:"Easy Time",url:"/services"},
    {title:"Link Shortener",url:"/contact-us"},
  ]


  return (
    <section className="App">
      <div className='App__inner flex '>

        <aside className='App__aside bg-green-400 min-h-screen max-w-1/4 px-8 pt-16'>
          <h2 className='text-left font-bold text-xl cursor-default mb-12'>Services</h2>
          
          <h3 className='text-left mt-8 font-bold'>Image Services</h3>
          <ul className='text-left mt-4 px-4 font-bold text-xl'>
            {arr_img_services.map((item,index)=>{
              if(index === 0 ){
                  return <a key={index} href={item.url} className='cursor-pointer page-active'>
                              <li className='mb-4'>
                                {item.title}
                              </li>
                          </a>
              }else{
                  return <a key={index} href={item.url} className='  cursor-pointer'>
                              <li className='mb-4'>
                                {item.title}
                              </li>
                          </a>
              }
            })}
          </ul>

          <h3 className='text-left mt-8 font-bold'>Other Services</h3>
          <ul className='text-left mt-4 px-4 font-bold text-xl'>
            {arr_other.map((item,index)=>{
              if(index === 0 ){
                  return <a key={index} href={item.url} className='cursor-pointer page-active'>
                              <li className='mb-4'>
                                {item.title}
                              </li>
                          </a>
              }else{
                  return <a key={index} href={item.url} className='  cursor-pointer'>
                              <li className='mb-4'>
                                {item.title}
                              </li>
                          </a>
              }
            })}
          </ul>
        </aside>

        <main className='App__main bg-black/15 min-h-screen w-full'>
          <header className='flex justify-center items-start bg-black/20 w-full'>
              <h1 className='font-bold text-3xl py-4'>{GenContent.title}</h1>
          </header>
          <div className='App__main__inner px-8 w-full'>
            <h1 className='font-bold text-3xl py-4'>Diese Seite befindet sich noch im Aufbau</h1>
          </div>
        </main>

      </div>


  </section>
  )
}

export default App
