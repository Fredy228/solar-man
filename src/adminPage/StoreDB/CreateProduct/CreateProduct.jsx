import { useParams, useSearchParams } from 'react-router-dom';
import { CreateSolution } from '../../../components/AdminFormCreate/CreateSolution';
import { CreateComponents } from '../../../components/AdminFormCreate/CreateComponents';

const CreateProduct = () => {
  const { goodCreate } = useParams();
  const [searchParams] = useSearchParams();
  const idParams = searchParams.get('id-product');

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
