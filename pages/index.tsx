import type { NextPage } from 'next';
import styled from 'styled-components';
import Post from '@components/CompoundExample/Post'

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

const Main: NextPage = () => {
  return (
    <MainLayout>
      <section>
        <Post>
          <Post.Title />
          <Post.Comment />
          <Post.Buttons />
        </Post>
      </section>
      <section>
        <ul>
          <li>style reset test(list)</li>
          <button>style reset test(button)</button>
        </ul>
      </section>
    </MainLayout>
  );
};

export default Main;
