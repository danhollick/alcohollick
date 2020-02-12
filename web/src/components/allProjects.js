import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { ProjectPreview } from './projectPreview'
import { below } from './layout'

const allProjectsQuery = graphql`
  query AllProjectsQuery {
    projects: allSanityProject(sort: { fields: name, order: DESC }) {
      nodes {
        url
        name
        description
        image {
          asset {
            fluid(maxWidth: 398) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

const AllModule = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 400px));
  grid-gap: 32px;
  justify-content: end;
  align-content: start;
  margin: 48px 0px;
  ${below.small`
    grid-template-columns: 1fr;
  `}
`

const UnstyledA = styled.a`
  text-decoration: none;
  appearance: none;
`

export const AllProjects = ({ className }) => {
  const data = useStaticQuery(allProjectsQuery)
  return (
    <AllModule className={className}>
      {data.projects.nodes.map((project, i) => (
        <UnstyledA href={project.url} target="_blank">
          <ProjectPreview key={i} delay={i} {...project} />
        </UnstyledA>
      ))}
    </AllModule>
  )
}
