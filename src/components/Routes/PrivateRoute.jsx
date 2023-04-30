import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { checkAuth } from 'components/API/API';
import { LoadSpiner } from 'components/LoadSpiner/LoadSpiner';
import { useStoreAuth } from 'globalState/globalState';

const Screen = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrivateRoute = ({ component: Component, redirectTo = '/', ...rest }) => {
  const { isAuth, toggleValue } = useStoreAuth();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function checkAuthentication() {
      try {
        const auth = await checkAuth();
        toggleValue(auth);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
    checkAuthentication();
  }, [isAuth, toggleValue]);

  if (isLoading) {
    return (
      <Screen>
        <LoadSpiner
          borderColor={'#00425A'}
          barColor={'#00425A'}
          width={'100'}
          height={'100'}
        />
      </Screen>
    );
  }

  return isAuth ? (
    <Component {...rest} />
  ) : (
    <Navigate to={redirectTo} replace={true} />
  );
};

export default PrivateRoute;
