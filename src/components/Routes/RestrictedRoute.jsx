import { Navigate } from 'react-router-dom';
import { checkAuth } from 'components/API/API';
import { useEffect, useState } from 'react';
import { LoadSpiner } from 'components/LoadSpiner/LoadSpiner';
import { useStoreAuth } from 'globalState/globalState';

const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuth, toggleValue } = useStoreAuth();

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
      <LoadSpiner
        borderColor={'#00425A'}
        barColor={'#00425A'}
        width={'100'}
        height={'100'}
      />
    );
  }

  return !isAuth ? (
    <Component {...rest} />
  ) : (
    <Navigate to={redirectTo} replace={true} />
  );
};

export default RestrictedRoute;
