import React from 'react'
import './Home.css'
import { CiMail } from "react-icons/ci";
import { BsTelephoneX } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import logo from '../Assets/logo.avif'
import Menu from './Menu';
import Api from './Api';
import { CgPlayButtonO } from "react-icons/cg";
import { MdOutline360 } from "react-icons/md";
import { BsArrowUpRightCircle } from "react-icons/bs";



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
 <div className='why'>
 <Api /> 
 <div className='let' >Let there be</div> <div className='light'>Light </div>
 <div className='watch'><CgPlayButtonO className='play'/>Watch our video <MdOutline360 className='six' /> Virtual Tour</div>
 <span></span>
 
  </div>
  <div className='know'> Know more about us
  <BsArrowUpRightCircle className='arrow'/>  
  </div>

  <div className='foot'>
  <ul>5000+</ul> 
  <ul>200+</ul>
  <ul>50+</ul>
  <ul>100%</ul>
  <ul>500+</ul>
  <ul>200+</ul>
  </div>
  <div className='list'>
  <ul className='stud '>Students</ul> 
  <ul className='teach '>Teachers</ul>
  <ul className='year '>Years of Legacy</ul>
  <ul className='result '>Results For Board Exams</ul>
  <ul className='aiims '>AIIMS Admissions</ul>
  <ul className='iit '>IIT Admissions</ul>
  </div>
  


        </div>

        
  )
}

export default Home