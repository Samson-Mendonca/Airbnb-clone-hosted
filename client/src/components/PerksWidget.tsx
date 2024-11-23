import React from 'react'

export default function PerksWidget({perks}) {
 

  return (
    <div className='grid items-center'>
{    perks.map((item)=>(
    <div  className=" rounded-2xl p-4 inline-flex items-start gap-0">
    
    <svg className='font-semibold' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100"><path id="gisPoint0" fill="currentColor" fill-opacity="1" fill-rule="nonzero" stroke="none" stroke-dasharray="none" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke-opacity="1" stroke-width="7" d="M50 37.45c-6.89 0-12.55 5.66-12.55 12.549c0 6.89 5.66 12.55 12.55 12.55c6.655 0 12.112-5.294 12.48-11.862a3.5 3.5 0 0 0 .07-.688a3.5 3.5 0 0 0-.07-.691C62.11 42.74 56.653 37.45 50 37.45Zm0 7c3.107 0 5.55 2.442 5.55 5.549s-2.443 5.55-5.55 5.55c-3.107 0-5.55-2.443-5.55-5.55c0-3.107 2.443-5.549 5.55-5.549z" color="currentColor" color-interpolation="sRGB" color-rendering="auto" display="inline" vector-effect="none" visibility="visible"/></svg>

    <span className='font-semibold'> {item}</span>
  </div>
    ))}
    </div>
  )
}
