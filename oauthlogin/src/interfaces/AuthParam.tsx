// 소셜로그인 request interface
export interface SocialLoginParam {
  email: string;
  oauthToken: string;
  social_type: string;
  social_data: string;
  login_type: number;
}
