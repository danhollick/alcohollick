import React from 'react'
import styled from 'styled-components'
import { Stack } from '../layout'
import { Heading, Body } from '../text'

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  margin: 0rem -9999px;
  padding: 40px 9999px;
  background: rgb(247, 220, 219);
  background: linear-gradient(
    0deg,
    rgba(247, 220, 219, 1) 0%,
    rgba(230, 224, 231, 1) 31%,
    rgba(196, 212, 214, 1) 100%
  );
`

export const Contact = () => (
  <Wrapper>
    <Stack spacing={4} className="JustifyCenter">
      <Heading className="JustifyCenter">Contact</Heading>
      <Body className="JustifyCenter">Nope 🙅‍♂️</Body>
    </Stack>
  </Wrapper>
)
