import Navigation from '@/components/nav/navigation';
import { getCookie } from '@/util/cookie';
import styled from 'styled-components';

const MainContainer = styled.section`
  h1 {
    text-align: center;
    font-size: 4rem;
  }
`;

export default function Home() {
  return (
    <main>
      <MainContainer>
        <h1>이곳은 홈페이지 입니다.</h1>
      </MainContainer>
    </main>
  );
}

// export const getServerSideProps: GetServerSideProps = ({ req, query }: GetServerSidePropsContext) => {
//   const cookieList = req.headers.cookie ? cookieStringToObject(req.headers.cookie) : '';
//   const findProviderCookieValue = Object.entries(cookieList).find((item: string[]) => item.includes('provider'));
//   const findLoginCookieValue = Object.entries(cookieList).find((item: string[]) => item.includes('login_access_token'));
//   // console.log('로그인 리다이렉트 쿠키값', cookieList, findProviderCookieValue, findLoginCookieValue);
//   // return authGuard(findProviderCookieValue, findLoginCookieValue);
// };
