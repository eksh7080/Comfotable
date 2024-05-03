import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next/types';
import axios from 'axios';
import { loginRedirect, socialLoginApi } from '@/util/auth';
import useSocialLoginRedirect from '@/hooks/useSocialLoginRedirect';

const KakaoRedirectPage: NextPage = ({ userEmail, access_token }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useSocialLoginRedirect('kakao', userEmail, access_token);

  return <></>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, query }: GetServerSidePropsContext) => {
  console.log(query, '쿼리');

  const getLoginToken = await axios({
    method: 'POST',
    url: 'https://kauth.kakao.com/oauth/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    params: {
      grant_type: 'authorization_code',
      client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
      redirect_uri: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/kakao`,
      code: query.code,
    },
  });
  if (getLoginToken) {
    console.log('KAKAO 토큰 정보 조회', getLoginToken.data);
    const getProfile = await axios({
      method: 'GET',
      url: 'https://kapi.kakao.com/v2/user/me',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `Bearer ${getLoginToken.data.access_token}`,
      },
    });
    console.log('KAKAO 프로필 정보 조회', getProfile.data);
    if (getProfile) {
      return await socialLoginApi('KAKAO', getLoginToken.data, getProfile.data);
    } else {
      return loginRedirect('프로필 정보를 가져오지 못했습니다. 로그인페이지로 이동합니다.');
    }
  } else {
    return loginRedirect('토큰 정보를 가져오지 못했습니다. 로그인페이지로 이동합니다.');
  }
};

export default KakaoRedirectPage;
