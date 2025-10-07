import React from 'react'
import Innovationhero from '../components/Innovation/InnovationHero'
import FeaturedInnovation from '../components/Innovation/FeaturedInnovation'

const Innovation = ({InnovationData}) => {
  return (
    <div>
      <Innovationhero/>
      <FeaturedInnovation/>
    </div>
  )
}

export default Innovation