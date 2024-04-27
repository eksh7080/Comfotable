import styled from 'styled-components';
import GoogleIcon from '@/components/icon/GoogleIcon';
import { setCookie } from '@/util/cookie';
import dayjs from 'dayjs';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next/types';
import { authGuard } from '@/util/auth';
import Image from 'next/image';
import Naver from '@/public/images/naver.png';

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
    display: flex;
    flex-direction: column;
    gap: 2rem;
    li {
      button[type='button'] {
        appearance: none;
        background: none;
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
    case 'naver':
      const naverAuthURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}/naver&state=1234`;
      window.location.href = naverAuthURL;
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
          <li>
            <button type="button" onClick={() => goAuthLogin('naver')}>
              <Image src={Naver} width={100} height={40} priority alt="naver login btn" />
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
