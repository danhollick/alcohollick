import React from 'react'
import { TFWPage } from '../components/page'
import SEO from '../components/seo'
import { Hero } from '../components/tfw/hero'
import { Section1 } from '../components/tfw/Section1'
import { Section2 } from '../components/tfw/Section2'
import { Testimonials } from '../components/tfw/Testimonials'
import { Downloads } from '../components/tfw/Downloads'
import { Contact } from '../components/tfw/Contact'

const IndexPage = () => (
  <TFWPage>
    <SEO
      title="The F*cking Weather"
      description="A weather app for people who hate weather apps"
    />
    <Hero />
    <Section1 />
    <Section2 />
    <Testimonials />
    <Downloads />
    <Contact />
  </TFWPage>
)

export default IndexPage
