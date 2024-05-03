import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import { setCookie } from '@utils/cookie';
import { homeRedirect } from '@/util/auth';

/**
 * 소셜로그인 리다이렉트 훅
 * @param _provider 로그인 타입
 * @param _userEmail 입력한 이메일
 * @param _access_token 소셜 로그인 access token
 * @returns redirect page
 */

const useSocialLoginRedirect = (_provider: string, _userEmail: string, _access_token: string) => {
  const router = useRouter();

  useEffect(() => {
    if (_provider !== undefined && _userEmail !== undefined && _access_token !== undefined) {
      homeRedirect(router, _provider, _access_token);
    }
  }, [_provider, _userEmail, _access_token]);

  return <></>;
};

export default useSocialLoginRedirect;
