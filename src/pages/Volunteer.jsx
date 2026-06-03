import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import VolunteerHero from '../components/volunteer_components/HeroV'
import VolunteerWays from '../components/volunteer_components/VolunteerWays'
import JoinUs from '../components/volunteer_components/JoinUs'
import Footer from '../components/Footer'


const Volunteer = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash !== '#joinus') {
      return
    }

    const scrollToJoinUs = () => {
      const element = document.getElementById('joinus')

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const frameId = window.requestAnimationFrame(scrollToJoinUs)

    return () => window.cancelAnimationFrame(frameId)
  }, [location.hash])

  return (
    <div >
      <VolunteerHero />
      <VolunteerWays />
      <JoinUs />
      <Footer />
    </div>
  )
}

export default Volunteer
