import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string, option?: any) => {
  return cookies.remove(name, { ...option });
};

/**
 * string 쿠키 -> 객체 convert
 * @params {
 *  cookieString => 로그인 쿠키 string
 * }
 * @returns cookieString Object
 */
export const cookieStringToObject = (cookieString: any) => {
  const cookies = Object.fromEntries(cookieString.split(';').map((cookie) => cookie.trim().split('=')));
  return cookies;
};
