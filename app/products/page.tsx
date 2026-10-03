"use client"
import React from 'react'
import {motion} from "framer-motion"
import { ChartBarStacked, DollarSign, ShoppingBag, SquareActivity } from 'lucide-react'
import StateCard from "@/components/StateCard"
import ProductsTable from '../../components/ProductsTable'

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10' >
        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 ' >
            <motion.div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 '
                initial={{opacity: 0, y: 20}}
                animate={{opacity:1 , y: 0}}
                transition={{duration:1}}
            >
                <StateCard name="total Products" icon={ShoppingBag} value={"4,352"} />
                <StateCard name="Total Stock" icon={SquareActivity} value={"18,450"} />
                <StateCard name="Total sold" icon={DollarSign} value={"12,780"} />
                <StateCard name="Total Categories" icon={ChartBarStacked} value={8} />
            </motion.div>

            <ProductsTable />
        </main>
    </div>
  )
}

export default ProductsPage