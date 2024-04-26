import styled from 'styled-components';
import GoogleIcon from '@/components/icon/GoogleIcon';
import { setCookie } from '@/util/cookie';
import dayjs from 'dayjs';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next/types';
import { authGuard } from '@/util/auth';

/* ----------------------  style start ----------------------  */

const LoginContainer = styled.section`
  max-width: 100%;
  width: 100%;
  margin-top: 4rem;
`;

const PositionCenter = styled.div`
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  width: 40rem;
  height: 40rem;
  padding: 4rem;
  margin: 0 auto;

  ul {
    li {
      button[type='button'] {
        appearance: none;
        cursor: pointer;
        border: none;
        border-radius: 0.6rem;
      }
    }
  }
`;

/* ----------------------  style end ----------------------  */

const goAuthLogin = (type: string) => {
  const expires = dayjs().add(30, 'days').toDate();

  // 로그인 타입에 따라 프로바이더 추가
  setCookie('provider', type, { expires: expires, path: '/' });
  switch (type) {
    case 'google':
      const googleAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
      window.location.href = googleAuthURL;
      break;

    default:
      break;
  }
};

const LoginPage = () => {
  return (
    <LoginContainer>
      <PositionCenter>
        <ul>
          <li>
            <button type="button" onClick={() => goAuthLogin('google')}>
              <GoogleIcon />
            </button>
          </li>
        </ul>
      </PositionCenter>
    </LoginContainer>
  );
};

// export const getServerSideProps: GetServerSideProps = ({ req, query }: GetServerSidePropsContext) => {
//   const cookieList = req.headers.cookie ? cookieStringToObject(req.headers.cookie) : '';
//   const findProviderCookieValue = Object.entries(cookieList).find((item: string[]) => item.includes('provider'));
//   const findLoginCookieValue = Object.entries(cookieList).find((item: string[]) => item.includes('login_access_token'));
//   console.log('로그인 리다이렉트 쿠키값', cookieList, findProviderCookieValue, findLoginCookieValue);
//   return authGuard(findProviderCookieValue, findLoginCookieValue);
// };

export default LoginPage;
