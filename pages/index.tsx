import type { NextPage } from 'next'
import Example from '../components/test';
import useExample from '../hooks/useExample'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Example />
    </Container>
  )
}

export default Home
