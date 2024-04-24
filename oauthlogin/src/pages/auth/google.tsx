import { redirect } from 'next/navigation';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next/types';
import axios from 'axios';

const GoogleRedirectPage = ({ res, result }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(res.code, '- --- - - - - - -- - - - - ');
  return <>Helloworld</>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const response = await axios({
    method: 'POST',
    url: 'https://oauth2.googleapis.com/token',
    data: {
      grant_type: 'authorization_code',
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/google`,
      code: query.code,
      access_type: 'offline',
      prompt: 'consent',
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const data = response.data;
  console.log(response);
  return { props: { res: query, result: data } };
  // const CookieList = req.headers.cookie ? cookieStringToObject(req.headers.cookie) : '';
  // const findInviteValue = CookieList['invite_uuid'];
  // const findRecomCodeValue = CookieList['recommend_code'];
  // try {
  //   const response = await axios({
  //     method: 'POST',
  //     url: 'https://oauth2.googleapis.com/token',
  //     data: {
  //       grant_type: 'authorization_code',
  //       client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  //       client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  //       redirect_uri: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/google`,
  //       code: 'code',
  //       access_type: 'offline',
  //       prompt: 'consent',
  //     },
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   });
  //   //   if (response && !isUndefined(response.data)) {
  //   //     console.log('GOOGLE 토큰 정보 조회', response.data);
  //   //     let profileResponse = await axios({
  //   //       method: 'GET',
  //   //       url: 'https://www.googleapis.com/oauth2/v3/userinfo',
  //   //       params: {
  //   //         access_token: response.data.access_token,
  //   //       },
  //   //     });
  //   //     if (profileResponse && !isUndefined(profileResponse.data)) {
  //   //       console.log('GOOGLE 프로필 정보 조회', profileResponse.data);
  //   //       return await socialLoginApi(
  //   //         response.data,
  //   //         profileResponse.data,
  //   //         'GOOGLE',
  //   //         !isUndefined(findInviteValue) ? findInviteValue : '',
  //   //         !isUndefined(findRecomCodeValue) ? findRecomCodeValue : null,
  //   //       );
  //   //     } else {
  //   //       return loginRedirect('프로필 정보를 가져오지 못했습니다. 로그인페이지로 이동합니다.');
  //   //     }
  //   //   } else {
  //   //     return loginRedirect('토큰 정보를 가져오지 못했습니다. 로그인페이지로 이동합니다.');
  //   //   }
  // } catch (error) {
  //   console.log(error);
  //   //   return loginRedirect('토큰 정보를 가져오지 못했습니다. 로그인페이지로 이동합니다.');
  //   return;
  // }
};

export default GoogleRedirectPage;
