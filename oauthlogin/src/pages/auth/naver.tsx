import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next/types';
import axios from 'axios';
import { homeRedirect, loginRedirect, socialLoginApi } from '@/util/auth';

const NaverRedirectPage: NextPage = ({ userEmail, access_token }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  //   homeRedirect('naver', userEmail, access_token);

  return <>Hello World</>;
};

// export const getServerSideProps: GetServerSideProps = async ({ req, query }: GetServerSidePropsContext) => {
//   const getLoginToken = await axios({
//     method: 'GET',
//     url: 'https://nid.naver.com/oauth2.0/token',
//     params: {
//       grant_type: 'authorization_code',
//       client_id: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
//       client_secret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
//       redirect_uri: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/naver`,
//       scope: '',
//       code: query.code,
//     },
//   });
//   if (getLoginToken) {
//     //   console.log('NAVER 토큰 정보 조회', getLoginToken.data);
//     const getProfile = await axios({
//       method: 'GET',
//       url: 'https://openapi.naver.com/v1/nid/me',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         Authorization: 'Bearer ' + response.data.access_token,
//       },
//     });
//     //   console.log('NAVER 프로필 정보 조회', getProfile.data);
//     if (getProfile) {
//       return await socialLoginApi(getLoginToken.data, getProfile.data, 'NAVER');
//     } else {
//       return loginRedirect('프로필 정보를 가져오지 못했습니다. 로그인페이지로 이동합니다.');
//     }
//   } else {
//     return loginRedirect('토큰 정보를 가져오지 못했습니다. 로그인페이지로 이동합니다.');
//   }
//   console.log(error);
// };

export default NaverRedirectPage;
