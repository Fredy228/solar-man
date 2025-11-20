import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  PortfolioList,
  PortfolioItem,
  PortfolioImg,
  TitlePortfolio,
  SpanOverLay,
  WrapperImg,
  ButtonAll,
} from './Portfolio.styled';

import {
  SectionTitle,
  SectionSubtitle,
} from '../../../../common-style/SectionTitle.styled';

import { baseURL } from 'api/base.api';
import { LoadSpiner } from 'components/reused/load-spinner/LoadSpiner';
import { ButtonOrg } from '../../../../common-style/ButtonCommon.styled';
import { LoadPage } from '../../../reused/load-spinner/LoadPage';
import { getPosts } from '../../../../api/post.api';

export const ProjectsC = () => {
  const limit = 6;
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFirst, setIsLoadingFirst] = useState(true);
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
      setIsLoadingFirst(false);
    }
    gettingPosts();
  }, []);

  return (
    <>
      <SectionTitle>Проекти</SectionTitle>
      <SectionSubtitle>
        Реалізовані нами проекти в області альтернативної енергетики, <br />
        які демонструють нашу компетентність та досвід у даній галузі.
      </SectionSubtitle>

      {isLoadingFirst ? (
        <LoadPage />
      ) : (
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
                  <SpanOverLay>{item.year}</SpanOverLay>
                </WrapperImg>

                <TitlePortfolio>{item.title}</TitlePortfolio>
              </ButtonAll>
            </PortfolioItem>
          ))}
        </PortfolioList>
      )}

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
