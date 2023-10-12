import type { NextPage } from 'next';
import styled from 'styled-components';

const MainLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;

  width: 100%;
  height: 100vh;

  font-size: 100px;

  ${({ theme }) => theme.mobile} {
    width: 340px;
    height: 100vh;
  }
`;

const MainPage: NextPage = () => {
  return (
    <MainLayout>
      <h1>다인종 애호가 양승직 화이팅!</h1>
    </MainLayout>
  );
};

export default MainPage;
