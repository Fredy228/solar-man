import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PortfolioInner,
  PortfolioList,
  PortfolioItem,
  PortfolioImg,
  TitlePortfolio,
  SpanOverLay,
  WrapperImg,
} from './Portfolio.styled';

import { SectionTitle } from '../../CommonStyle/SectionTitle.styled';

import { getPosts, baseURL } from 'components/API/API';
import { Icon } from '../Icon/Icon';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';

export const Portfolio = () => {
  const limit = 6;
  const [items, setItems] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    async function gettingPosts() {
      const { posts } = await getPosts(limit);
      setItems(posts);
    }
    gettingPosts();
  }, []);

  return (
    <PortfolioInner>
      <SectionTitle marginBottom={'40px'}>Проекти</SectionTitle>

      <PortfolioList>
        {items.map(item => (
          <PortfolioItem key={item.id}>
            <WrapperImg>
              <PortfolioImg
                src={`${baseURL}/${item.urlImg}`}
                loading="lazy"
                width="450"
                height="260"
                alt={item.title}
              />
              <SpanOverLay>{item.year} рік</SpanOverLay>
            </WrapperImg>
            <TitlePortfolio>{item.title}</TitlePortfolio>
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
          <Icon name={'icon-photograph'} /> Дивитись усі проекти
        </ButtonOrg>
      </div>
    </PortfolioInner>
  );
};
