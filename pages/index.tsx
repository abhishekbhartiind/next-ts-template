import Post from '@components/CompoundExample/Post';
import { getExampleData } from '@libs/api/example';
import type { NextPage } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import styled from 'styled-components';

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

const MainPage: NextPage = () => {
  const { data } = useQuery('example', getExampleData);
  return (
    <MainLayout>
      <h1>main</h1>
      <section>
        <Post>
          <Post.Title />
          <Post.Comment />
          <Post.Buttons />
        </Post>
      </section>
      {data ? data.name : 'loading'}
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
  await queryClient.prefetchQuery('example', getExampleData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MainPage;
