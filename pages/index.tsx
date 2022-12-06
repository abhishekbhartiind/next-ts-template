import type { NextPage } from 'next';
import styled from 'styled-components';
import Post from '@components/CompoundExample/Post'
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getExampleData } from '@libs/api/example';

const MainLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;

  width: 100%;
  height: 100vh;

  ${({ theme }) => theme.mobile} {
    width: 300px;
    height: 100vh;
  }
`;

const MainPage: NextPage = (props) => {
  const { data } = useQuery('example', getExampleData)
  return (
    <MainLayout>
      <section>
        <Post>
          <Post.Title />
          <Post.Comment />
          <Post.Buttons />
        </Post>
      </section>
      {data.name}
      <section>
        <ul>
          <li>style reset test(list)</li>
          <button>style reset test(button)</button>
        </ul>
      </section>
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('example', getExampleData)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default MainPage;
