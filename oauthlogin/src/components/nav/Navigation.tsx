import { removeCookie } from '@/util/cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavContainer = styled.nav`
  max-width: 100%;
  padding: 4rem;
  ul {
    li {
      a {
        font-size: 3rem;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

const Navigation = () => {
  const router = useRouter();
  return (
    <NavContainer>
      <ul>
        {router.pathname.includes('/signin') ? (
          <li onClick={() => removeCookie('provider')}>
            <Link href="/">로그아웃</Link>
          </li>
        ) : (
          <li>
            <Link href="/signin">로그인</Link>
          </li>
        )}
      </ul>
    </NavContainer>
  );
};

export default Navigation;
