import styled from 'styled-components';
import GoogleIcon from '../components/icon/googleIcon';

/* ----------------------  style ----------------------  */

const Container = styled.section`
  max-width: 100%;
  width: 100%;
  margin-top: 4rem;
`;

const PositionCenter = styled.div`
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  width: 40rem;
  height: 40rem;
  padding: 4rem;
  margin: 0 auto;

  ul {
    li {
      button[type='button'] {
        appearance: none;
        cursor: pointer;
        border: none;
        border-radius: 0.6rem;
      }
    }
  }
`;

/* ----------------------  ----------------------  ----------------------  ----------------------  ---------------------- */

const goAuthLogin = (type: string) => {
  switch (type) {
    case 'google':
      const googleAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
      window.location.href = googleAuthURL;
      break;

    default:
      break;
  }
};

export default function Home() {
  return (
    <Container>
      <PositionCenter>
        <ul>
          <li>
            <button type="button" onClick={() => goAuthLogin('google')}>
              <GoogleIcon />
            </button>
          </li>
        </ul>
      </PositionCenter>
    </Container>
  );
}
