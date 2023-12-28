import React, { useState, useEffect } from 'react';
import HomeImage from '../Assets/Home.jpg';
import AdmissionImage from '../Assets/Admission.jpg';
import AcademicsImage from '../Assets/Academics.jpg';
import StaffImage from '../Assets/Staff.jpg';
import GalleryClassroom from '../Assets/GalleryClassroom.jpg';
import GalleryClassroomP from '../Assets/GalleryClassroomP.jpg';
import Gallery from '../Assets/Gallery.jpg';
import AboutUsImage from '../Assets/AboutUs.jpg';
import './Menu.css';

const galleryImages = [GalleryClassroom, GalleryClassroomP, Gallery];

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState('Home');

  useEffect(() => {
    
    const homeImage = getImagePath('Home');
  
  }, []); 

  const handleItemClick = (itemName) => {
    console.log(`Clicked on ${itemName}`);
    setSelectedItem(itemName);
  };

  const getRandomGalleryImage = () => {
    const randomIndex = Math.floor(Math.random() * galleryImages.length);
    return galleryImages[randomIndex];
  };

  const getImagePath = (itemName) => {
    switch (itemName) {
      case 'Home':
        return HomeImage;
      case 'Academics':
        return AcademicsImage;
      case 'Admission':
        return AdmissionImage;
      case 'Staff':
        return StaffImage;
      case 'Gallery':
        return getRandomGalleryImage();
      case 'About Us':
        return AboutUsImage;
      default:
        return null;
    }
  };

  return (
    <div className='menu'>
      <ul className={selectedItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>Home</ul>
      <ul className={selectedItem === 'Academics' ? 'active' : ''} onClick={() => handleItemClick('Academics')}>Academics</ul>
      <ul className={selectedItem === 'Admission' ? 'active' : ''} onClick={() => handleItemClick('Admission')}>Admission</ul>
      <ul className={selectedItem === 'Staff' ? 'active' : ''} onClick={() => handleItemClick('Staff')}>Staff</ul>
      <ul className={selectedItem === 'Gallery' ? 'active' : ''} onClick={() => handleItemClick('Gallery')}>Gallery</ul>
      <ul className={selectedItem === 'About Us' ? 'active' : ''} onClick={() => handleItemClick('About Us')}>About Us</ul>

      <img className='image-style' src={getImagePath(selectedItem)} alt={selectedItem} />
    </div>
  );
};

export default Menu;
