import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  PortfolioInner,
  PortfolioList,
  PortfolioItem,
  PortfolioImg,
  TitlePortfolio,
  SpanOverLay,
  WrapperImg,
  ButtonAll,
} from './Portfolio.styled';

import { SectionTitle } from '../../../../common-style/SectionTitle.styled';

import { baseURL } from 'api/base.api';
import { Icon } from '../../../reused/icon/Icon';
import { ButtonOrg } from '../../../../common-style/ButtonCommon.styled';
import { getPosts } from '../../../../api/post.api';

export const Portfolio = () => {
  const limit = 6;
  const [items, setItems] = useState([]);
  const history = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/');
  const lang = currentPath[currentPath.length - 1];

  useEffect(() => {
    async function gettingPosts() {
      const { posts } = await getPosts(limit);
      setItems(posts);
    }
    gettingPosts().catch(console.error);
  }, []);

  return (
    <PortfolioInner>
      <SectionTitle marginBottom={'40px'}>
        {lang === 'ru' ? 'Проекты' : 'Проекти'}
      </SectionTitle>

      <PortfolioList>
        {items.map(item => (
          <PortfolioItem key={item.id}>
            <ButtonAll
              to={`/projects/${item.id}`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <WrapperImg>
                <PortfolioImg
                  src={`${baseURL}/${item.urlImg}`}
                  loading="lazy"
                  width="450"
                  height="280"
                  alt={item.title}
                />
                <SpanOverLay>{item.year} рік</SpanOverLay>
              </WrapperImg>
              <TitlePortfolio>{item.title}</TitlePortfolio>
            </ButtonAll>
          </PortfolioItem>
        ))}
      </PortfolioList>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <ButtonOrg
          type={'button'}
          onClick={() => history('/projects')}
          colorBg={'main'}
          colorBgHover={'second'}
        >
          <Icon name={'icon-photograph'} />
          {lang === 'ru' ? 'Посмотреть все проекты' : 'Дивитись усі проекти'}
        </ButtonOrg>
      </div>
    </PortfolioInner>
  );
};
