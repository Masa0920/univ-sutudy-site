import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <div className="flex margin10 padding20 font-weight600 back-skyblue">
         <div className="left absolute">北大情エレ2年</div>
         <Link className="margin-auto" to={'/'} >
            <div>HOME</div>
         </Link>
         {/* <div className="right absolute-right">osamu</div> */}
      </div>
   )
}

export default Navbar
