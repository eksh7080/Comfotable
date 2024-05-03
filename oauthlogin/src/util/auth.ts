import dayjs from 'dayjs';
import { setCookie } from './cookie';
import { NextRouter } from 'next/router';

export const authGuard = (provider: string, sns_access_token: any) => {
  console.log('소셜로그인 리다이렉트 ');
  if (provider !== '' && sns_access_token !== '') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export const loginRedirect = (_errMsg: string) => {
  console.error(_errMsg);
  return {
    redirect: {
      destination: '/signin',
      permanent: false,
    },
  };
};

// 소셜로그인 설문 판별 및 로그인
export const socialLoginApi = async (_provider: string, _tokenInfo: any, _profileInfo: any) => {
  const filterSocialEmail =
    _provider === 'NAVER'
      ? _profileInfo.response.email
      : _provider === 'KAKAO'
      ? _profileInfo.kakao_account.email
      : _provider === 'GOOGLE' || _provider === 'FACEBOOK'
      ? _profileInfo.email
      : '';

  // const authParam: SocialLoginParam = {
  //   email: filterSocialEmail,
  //   oauthToken: _tokenInfo.access_token,
  //   social_type: _provider,
  //   social_data: JSON.stringify(Object.assign(_tokenInfo, _profileInfo)),
  // };

  return {
    props: {
      userEmail: filterSocialEmail,
      access_token: _tokenInfo.access_token,
      //   login_access_token: socialLoginResponse.data.access_token,
    },
  };

  //   const socialLoginResponse = await AuthApi.getSocialLogin(authParam);
  //   console.log('로그인 API', socialLoginResponse);
  //   if (socialLoginResponse.data && socialLoginResponse.data.access_token && socialLoginResponse.status === 201) {
  //     return {
  //       props: {
  //         userEmail: filterSocialEmail,
  //         access_token: _tokenInfo.access_token,
  //         login_access_token: socialLoginResponse.data.access_token,
  //       },
  //     };
  //   } else {
  //     console.error('로그인에 실패하였습니다');
  //     return {
  //       redirect: {
  //         destination: '/signin',
  //         permanent: false,
  //       },
  //     };
  //   }
};

// 홈 리다이렉트 처리
export const homeRedirect = (_router: NextRouter, _provider: string, _access_token: string) => {
  console.log('리다이렉트 처리 - 1', _provider, _access_token);
  // 이메일 일 경우 user_login_type 처리
  // if (_provider === 'email') {
  //   ReactGA.event('user_login_type', gaObjectMerge({ login_type: _provider, email: _router.query.email, time: gaTimeStamp() }));
  // }

  if (_access_token !== '') {
    const expires = dayjs().add(30, 'days').toDate();
    setCookie('provider', _provider, { expires, path: '/' });
    setCookie('sns_access_token', _access_token, { expires, path: '/' });
    _router.replace('/');
    // 기존 이메일 로그인은 provider 및 sns_access_token 예외처리 추가
    //   setCookie('provider', _provider, { expires, path: '/' });
    //   if (!isEmpty(_access_token)) {
    //     setCookie('sns_access_token', _access_token, { expires, path: '/' });
    //   }
    //   setCookie('login_access_token', _login_access_token, { expires, path: '/' });
  } else {
    //   layerPopup.toastShow('#toast_error', '소셜 로그인에 실패하였습니다.');
    console.log('소셜로그인 실패');
  }
};
