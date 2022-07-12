import React from 'react'
import { Link } from 'react-router-dom'
export const JotformNav = () => {
  return (
    <>
    <ul className='jotlist'>
    <Link to='/jotform'><li className='jot-link'>BUILD</li></Link>
    <Link to='/setting'><li className='jot-link' >SETTING</li></Link>
    <Link to='/publish'><li className='jot-link'>PUBLISH</li></Link>
</ul>
</>
  )
}
export default JotformNav