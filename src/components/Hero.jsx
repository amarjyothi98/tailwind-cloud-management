import React from 'react'

import StorageIcon from '@mui/icons-material/Storage';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import DnsIcon from '@mui/icons-material/Dns';

import imgOne from '../assets/horse.jpg'
import imgTwo from '../assets/Trutle.jpg'

export default function Hero() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Unique Sequencing & Production</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
          <p className='text-2xl'>This is our Tech Brand.</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>

        <div>
          <img src={imgOne} alt="/" className='w-full '/>
        </div>

        <div className='absolte flex flex-col justify-evenly py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
          <p className='font-bold'>Data Services</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600'/> Cloud Data</p>
            <p className='flex px-4 py-2 text-slate-500'><StorageIcon className='h-6 text-indigo-600'/> Dashboard</p>
            <p className='flex px-4 py-2 text-slate-500'><DnsIcon className='h-6 text-indigo-600'/> Anything</p>
            <p className='flex px-4 py-2 text-slate-500'><SendIcon className='h-6 text-indigo-600'/> Api</p>
          </div>
        </div>

      </div>
    </div>
  )
}
