import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutCard from '../components/About/AboutCard'
import AboutStory from '../components/About/AboutStory'
import AboutOurValues from '../components/About/AboutOurValues'
import AboutTeam from '../components/About/AboutTeam'

const About = () => {
    return (
        <div>
            <AboutHero />
            <AboutCard />
            <AboutStory />
            <AboutOurValues />
            <AboutTeam />
        </div>
    )
}

export default About