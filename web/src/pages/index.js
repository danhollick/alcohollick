import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Page from '../components/page'
import { Stack, Columns } from '../components/layout'
import PurpleImage from '../components/image'
import SEO from '../components/seo'
import { Title, MassiveHeading } from '../components/text'
import { JobList } from '../components/jobList'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 440) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Page>
      <SEO title="home" description="Designer + Coder" />
      <Columns className="AlignCenter">
        <Stack>
          <Stack className="AlignStart" spacing={1}>
            <MassiveHeading>dan hollick</MassiveHeading>
            <Title> Designer + Coder</Title>
          </Stack>
          <JobList className="AlignEnd" />
        </Stack>
        <PurpleImage
          className="JustifyEnd"
          width={440}
          fluid={data.profileImage.childImageSharp.fluid}
        />
      </Columns>
    </Page>
  )
}

export default IndexPage
