import { useParams } from 'react-router-dom';
import { CreateSolution } from '../../../components/AdminFormCreate/CreateSolution';
import { CreateComponents } from '../../../components/AdminFormCreate/CreateComponents';

const CreateProduct = () => {
  const { goodCreate } = useParams();
  return (
    <>
      {goodCreate === 'solution' ? <CreateSolution /> : <CreateComponents />})
    </>
  );
};

export default CreateProduct;
