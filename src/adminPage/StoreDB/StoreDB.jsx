import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavStoreDB } from './NavStoreDB/NavStoreDB';
import { Container } from '../../pages/Common.styled';
import { getStoreComponents, getStoreSets } from '../../components/API/API';
import { ListProduct } from './ListProduct/ListProduct';
import useWindowWidth from '../../services/widthScreen';

const StoreDB = () => {
  const [searchParams] = useSearchParams();
  const pageParams = searchParams.get('page');
  const typeParams = searchParams.get('type');
  const subtypeParams = searchParams.get('subtype');
  const sortParams = searchParams.get('sort');
  const [products, setProducts] = useState([]);
  const width = useWindowWidth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      const type = typeParams || 'Готові рішення';
      const page = Number(pageParams) || 1;
      const subtype = subtypeParams || 'Всі';
      const sort = sortParams || 'none';

      if (!type || !page || !subtype || !sort) return setIsLoading(false);

      try {
        let data;

        if (type === 'Готові рішення')
          data = await getStoreSets(page, 12, subtype, sort);

        if (type === 'Компоненти')
          data = await getStoreComponents(page, 12, subtype, sort);

        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        setProducts([]);
        setIsLoading(false);
      }

      setIsLoading(false);
    };

    fetchProducts().catch(err => console.log(err));
  }, [pageParams, typeParams, sortParams, subtypeParams]);

  return (
    <>
      {width > 769 ? (
        <Container>
          <NavStoreDB isLoading={isLoading} />
          <ListProduct
            products={products}
            setProducts={setProducts}
            type={typeParams || 'Готові рішення'}
          />
        </Container>
      ) : (
        <p style={{ textAlign: 'center', fontSize: '18px', padding: '20px' }}>
          Ця панель може будти використована на екранах шириною більше ніж 770px
        </p>
      )}
    </>
  );
};

export default StoreDB;
