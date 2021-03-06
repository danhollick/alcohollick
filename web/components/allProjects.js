import React from 'react'
import styled from 'styled-components'
import { ProjectPreview } from './projectPreview'
import { below } from './layout'

const AllModule = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 400px));
  grid-gap: 32px;
  justify-content: end;
  align-items: stretch;
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

export const AllProjects = ({ className, projects }) => (
  <AllModule className={className}>
    {projects.map((project, i) => (
      <UnstyledA href={project.url} key={i} target="_blank">
        <ProjectPreview delay={i} {...project} />
      </UnstyledA>
    ))}
  </AllModule>
)
