import React from 'react'
import { useState } from "react";
import HeroGallery from '../components/gallery/HeroGallery';
import GalleryGrid from '../components/gallery/ImpactGallery';
import Footer from '../components/Footer';


const Gallery = () => {
  return (
    <div >
      <HeroGallery />
      <GalleryGrid/>
      <Footer />
    </div>
  )
}

export default Gallery

