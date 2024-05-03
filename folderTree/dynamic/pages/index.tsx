import styled from '@emotion/styled';
import Link from 'next/link';

const Nav = styled.section`
  max-width: 100%;
  & a {
    font-size: ${(prop) => prop.theme.fontSize.big};
    margin-right: 2rem;
  }
`;

export default function Home() {
  return (
    <Nav>
      <Link href="one">원 뎁스</Link>
      <Link href="dynamic">동적 뎁스</Link>
    </Nav>
  );
}
