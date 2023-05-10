import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  PortfolioList,
  PortfolioItem,
  PortfolioImg,
  PortfolioOverLay,
  TitleOverLay,
  TextOverLay,
  ListOverLay,
  SpanOverLay,
  NavBtn,
} from './Portfolio.styled';

import {
  SectionTitle,
  SetctionText,
  TitleSpan,
} from 'components/SectionTitle/SectionTitle.styled';

import { getPosts, baseURL } from 'components/API/API';
import { LoadSpiner } from 'components/LoadSpiner/LoadSpiner';

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
      <SectionTitle>
        <TitleSpan>Наші</TitleSpan> проекти
      </SectionTitle>
      <SetctionText>
        Реалізовані нами проекти в області альтернативної енергетики та
        енергоефективності, які демонструють нашу компетентність та досвід у
        даній галузі.
      </SetctionText>
      <PortfolioList>
        {items.map(item => (
          <PortfolioItem key={item.id}>
            <PortfolioImg
              src={`${baseURL}/${item.urlImg}`}
              loading="lazy"
              width="500"
              height="400"
              alt={item.title}
            />
            <PortfolioOverLay>
              <TitleOverLay>{item.title}</TitleOverLay>
              <SpanOverLay>{item.year}</SpanOverLay>
              <ListOverLay>
                {JSON.parse(item.components).map(component => (
                  <TextOverLay key={component}>{component}</TextOverLay>
                ))}
              </ListOverLay>
            </PortfolioOverLay>
          </PortfolioItem>
        ))}
      </PortfolioList>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {total / limit > 1 && total / limit > page && (
          <NavBtn
            type="button"
            color="true"
            disabled={isDisabled}
            onClick={() => setPage(state => state + 1)}
          >
            {isLoading ? (
              <LoadSpiner borderColor={'#fff'} barColor={'#fff'} />
            ) : (
              'Завантажити ще'
            )}
          </NavBtn>
        )}
      </div>
    </>
  );
};
