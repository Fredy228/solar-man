import { useSearchParams } from 'react-router-dom';
import { BtnWrapper, Wrapper, ReactPaginateStyled } from './Pagination.styled';
import { Icon } from '../Icon/Icon';

const Pagination = ({ count, limit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page');

  const checkCount = () => {
    if (count && limit && Number(count) > Number(limit)) {
      return Number(count) / Number(limit);
    }
    if (count && Number(count) > 12) {
      return Number(count) / 12;
    }
    return 1;
  };

  const checkPage = () => {
    if (page > 1) {
      return page - 1;
    }
    return 0;
  };

  const handlePageChange = selectedPage => {
    const newPage = Number(selectedPage.selected) + 1;

    setSearchParams(prevSearchParams => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set('page', String(newPage));
      return newSearchParams;
    });

    window.scrollTo(0, 80);
  };

  const rightArrow = (
    <BtnWrapper style={{ transform: 'rotate(180deg)' }}>
      <Icon name={'icon-arrow'} />
    </BtnWrapper>
  );

  const leftArrow = (
    <BtnWrapper>
      <Icon name={'icon-arrow'} />
    </BtnWrapper>
  );

  return (
    <Wrapper>
      <ReactPaginateStyled
        pageCount={Math.ceil(checkCount())}
        previousLabel={leftArrow}
        nextLabel={rightArrow}
        breakLabel={''}
        containerClassName={'pagination'}
        previousLinkClassName={'paginationLink'}
        nextLinkClassName={'paginationLink'}
        pageLinkClassName={'paginationLink'}
        activeLinkClassName={'paginationActiveLink'}
        disableInitialCallback={true}
        forcePage={checkPage()}
        onPageChange={handlePageChange}
        marginPagesDisplayed={0}
        pageRangeDisplayed={4}
      />
    </Wrapper>
  );
};

export default Pagination;
