import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next/types';
import axios from 'axios';
import { homeRedirect, loginRedirect, socialLoginApi } from '@/util/auth';

const GoogleRedirectPage: NextPage = ({ userEmail, access_token }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  homeRedirect('google', userEmail, access_token);
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, query }: GetServerSidePropsContext) => {
  const getLoginToken = await axios({
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
  if (getLoginToken) {
    // console.log('GOOGLE 토큰 정보 조회', getLoginToken.data);
    const getProfile = await axios({
      method: 'GET',
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
      params: {
        access_token: getLoginToken.data.access_token,
      },
    });
    // console.log('GOOGLE 프로필 정보 조회', getProfile.data);
    if (getProfile) {
      return await socialLoginApi(getLoginToken.data, getProfile.data, 'GOOGLE');
    } else {
      return loginRedirect('프로필 정보를 가져오지 못했습니다. 로그인페이지로 이동합니다.');
    }
  } else {
    return loginRedirect('토큰 정보를 가져오지 못했습니다. 로그인페이지로 이동합니다.');
  }
};

export default GoogleRedirectPage;
