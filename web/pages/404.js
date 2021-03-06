import React from 'react'
import Page from '../components/page'
import SEO from '../components/seo'
import { Heading, Body } from '../components/text'

const NotFoundPage = () => (
  <Page>
    <SEO title="404: Not found" />
    <Heading>NOT FOUND</Heading>
    <Body>You just hit a route that doesn&#39;t exist... the sadness.</Body>
  </Page>
)

export default NotFoundPage
