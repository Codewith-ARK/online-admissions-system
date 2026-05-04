import React from 'react'
import Hero from '../landing-page/Hero'
import Featured from '../landing-page/Featured'
import Features from '../landing-page/Features'

function LandingPage() {
    return (
        <section className='*:py-10'>
            <Hero />
            <Featured />
            <Features />
        </section>
    )
}

export default LandingPage
