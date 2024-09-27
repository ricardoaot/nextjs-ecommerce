import React from 'react'
import { Cards } from '../Cards/Cards'
import productsPreLoad from '@/helpers/productsPreLoad'

export const HomeContainer = () => {
  return (
    <>
      <div>HomeContainer</div>
      <Cards products = {productsPreLoad}/>
    </>
  )
}
