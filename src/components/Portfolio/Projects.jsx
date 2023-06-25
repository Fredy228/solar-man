import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  PortfolioList,
  PortfolioItem,
  PortfolioImg,
  TitlePortfolio,
  SpanOverLay,
  NavBtn,
  WrapperImg,
} from './Portfolio.styled';

import { SectionTitle } from '../../CommonStyle/SectionTitle.styled';

import { getPosts, baseURL } from 'components/API/API';
import { LoadSpiner } from 'components/LoadSpiner/LoadSpiner';
import { Icon } from '../Icon/Icon';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';

export const ProjectsC = () => {
  const limit = 6;
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (page < 2) return;
    setIsLoading(true);
    setIsDisabled(true);
    async function gettingPosts() {
      const { posts } = await getPosts(limit, page);
      setItems(i => [...i, ...posts]);
      setIsLoading(false);
      setIsDisabled(false);
    }
    try {
      gettingPosts();
    } catch (error) {
      Notify.failure('Щось пішло не так...');
      Notify.failure(`${error}`);
      setIsLoading(false);
      setIsDisabled(false);
    }
  }, [page]);

  useEffect(() => {
    setPage(1);
    async function gettingPosts() {
      const { posts, totalPosts } = await getPosts(limit);
      setItems(posts);
      setTotal(totalPosts);
    }
    gettingPosts();
  }, []);

  return (
    <>
      <SectionTitle marginBottom={'40px'}>Проекти</SectionTitle>

      {/*  Реалізовані нами проекти в області альтернативної енергетики та*/}
      {/*  енергоефективності, які демонструють нашу компетентність та досвід у*/}
      {/*  даній галузі.*/}

      <PortfolioList>
        {items.map(item => (
          <PortfolioItem key={item.id}>
            <WrapperImg>
              <PortfolioImg
                src={`${baseURL}/${item.urlImg}`}
                loading="lazy"
                width="500"
                height="400"
                alt={item.title}
              />
              <SpanOverLay>{item.year}</SpanOverLay>
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
        {total / limit > 1 && total / limit > page && (
          <ButtonOrg
            type={'button'}
            onClick={() => setPage(state => state + 1)}
            colorBg={'main'}
            colorBgHover={'second'}
            disabled={isDisabled}
          >
            {isLoading ? (
              <LoadSpiner borderColor={'#fff'} barColor={'#fff'} />
            ) : (
              'Завантажити ще'
            )}
          </ButtonOrg>
        )}
      </div>
    </>
  );
};
