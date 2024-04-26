import Navigation from '@/components/nav/navigation';
import { getCookie } from '@/util/cookie';

export default function Home() {
  return (
    <main>
      <section>
        <h1>이곳은 홈페이지 입니다.</h1>
        <ul>
          <li>
            <label>LoginType {getCookie('provider')}</label>
          </li>
          <li>
            <label>소셜 토큰 유무 {getCookie('sns_access_token') === '' ? 'empty' : 'exist'}</label>
          </li>
        </ul>
      </section>
    </main>
  );
}

// export const getServerSideProps: GetServerSideProps = ({ req, query }: GetServerSidePropsContext) => {
//   const cookieList = req.headers.cookie ? cookieStringToObject(req.headers.cookie) : '';
//   const findProviderCookieValue = Object.entries(cookieList).find((item: string[]) => item.includes('provider'));
//   const findLoginCookieValue = Object.entries(cookieList).find((item: string[]) => item.includes('login_access_token'));
//   console.log('로그인 리다이렉트 쿠키값', cookieList, findProviderCookieValue, findLoginCookieValue);
//   return authGuard(findProviderCookieValue, findLoginCookieValue);
// };
