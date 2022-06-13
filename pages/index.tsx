import type { NextPage } from 'next'
import Example from '../components/test';
import useExample from '../hooks/useExample'

const Home: NextPage = () => {
  const { data, setData } = useExample();

  return (
    <div>
      <Example />
    </div>
  )
}

export default Home
