import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PortfolioInner,
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
  TitleSpan,
} from 'components/SectionTitle/SectionTitle.styled';

import { getPosts, baseURL } from 'components/API/API';

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
    <PortfolioInner id="projects">
      <SectionTitle color="#fff">
        <TitleSpan>Наші</TitleSpan> проекти
      </SectionTitle>
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
        <NavBtn type="button" onClick={() => history('/projects')}>
          Дивитися більше
        </NavBtn>
      </div>
    </PortfolioInner>
  );
};
