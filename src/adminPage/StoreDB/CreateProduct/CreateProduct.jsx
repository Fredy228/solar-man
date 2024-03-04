import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { CreateSolution } from '../../../components/AdminFormCreate/CreateSolution';
import { CreateComponents } from '../../../components/AdminFormCreate/CreateComponents';
import { useEffect } from 'react';
import { useStoreUser } from '../../../globalState/globalState';

const CreateProduct = () => {
  const navigate = useNavigate();
  const {
    userData: { role },
  } = useStoreUser();
  const { goodCreate } = useParams();
  const [searchParams] = useSearchParams();
  const idParams = searchParams.get('id-product');

  useEffect(() => {
    if (role === 'user') navigate('/admin/goods');
  }, [role, navigate]);

  return (
    <>
      {goodCreate === 'Готові рішення' ? (
        <CreateSolution idProduct={idParams} />
      ) : (
        <CreateComponents idProduct={idParams} />
      )}
      )
    </>
  );
};

export default CreateProduct;
