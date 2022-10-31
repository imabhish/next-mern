import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Card = () => {
    
    return (
        <div className="my-4">
            <div className="container mx-auto shadow p-4">
                <div className="flex justify-between items-center">
                    <Link href="/create-products">
                        <button className="rounded text-sm text-center py-2 px-7 bg-pink-500 text-white hover:bg-pink-600 outline">New</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card