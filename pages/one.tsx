import styled from '@emotion/styled';
import { useQuery } from 'react-query';

const Container = styled.section`
  max-width: 100%;
`;

const OneDepth = () => {
  const { isFetching } = useQuery('list', async () => await fetch(`/api/list`).then((res) => res.json()), {
    retry: 0,
    onSuccess(item) {
      console.log(item, 'item');
    },
  });

  return (
    <Container>
      <ul>
        <li></li>
      </ul>
    </Container>
  );
};

export default OneDepth;
