import React from 'react'
import './Home.css'
import { CiMail } from "react-icons/ci";
import { BsTelephoneX } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import logo from '../Assets/logo.avif'
import Menu from './Menu';



const Home = () => {
  return (
    <div>  
       <div className='badge'>
       <BsTelephoneX className='telephone-icon'/> <span className='number'> 04654 896 200 | 896 300 / 700</span>
        <CiMail className='mail-icon'/> <span className='mail-id'>info@eloitgl.obalschool.com </span> 
        <span className='enquire'>Enquire Online</span>
       </div>     
       <div> <img className='logo'src={logo} alt='logo'/> <span className='school-name'>Eloit Global School </span>
       <ul className='kakkanad' >Kakkanad</ul>
       <div class="input-groroundedup">
      
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  </div>
  
  < IoIosSearch className='search-icon'/>
  <div className='menu'> <Menu /> </div>

 </div> 
 <div className='why'>Why Eloit Global School ?</div>
       

        </div>

        
  )
}

export default Home