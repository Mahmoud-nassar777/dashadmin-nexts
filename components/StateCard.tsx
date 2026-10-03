"use client"
import { motion } from 'framer-motion'
import React from 'react'

const StateCard = ( { name, icon: Icon, value } ) => {
  return (
    <motion.div 
        className='bg-[#1e1e1e] backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-[#1f1f1f] ' 
        whileHover={{y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5) "}}    
    >
        <div className="px-4 py-5 sm:p-6 ">
            <span className='flex items-center text-lg font-medium text-gray-300' >
                <Icon size={25} className="mr-2" />
                {name}
            </span>
            <p className='mt-1 text-3xl font-semibold text-white' >
                {value}
            </p>
        </div>
    </motion.div>
  )
}

export default StateCard