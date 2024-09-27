import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
        <div>Ups this was not Found</div>
        <Link href={"/"}>Home</Link>
    </div>
    
  )
}

export default notFound