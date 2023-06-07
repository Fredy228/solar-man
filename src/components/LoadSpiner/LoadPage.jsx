import styled from 'styled-components';
import { MutatingDots } from 'react-loader-spinner';

const Div = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadPage = () => {
  return (
    <Div>
      <MutatingDots
        height="100"
        width="100"
        color="#FC7300"
        secondaryColor="#FC7300"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Div>
  );
};
