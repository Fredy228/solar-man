import styled from 'styled-components';

export const PortfolioInner = styled.section`
  padding: 50px 0;

  @media screen and (max-width: 1000px) {
    padding: 25px 0;
  }
`;

export const PortfolioList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 0 auto;
  }
`;

// export const PortfolioOverLay = styled.div`
//   position: absolute;
//   padding: 15px;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   bottom: 0;
//   transform: translateY(120%);
//   transition: transform 350ms ease;
//   color: ${({ theme }) => theme.color.white};
//   background-image: linear-gradient(
//     to bottom,
//     rgba(0, 0, 0, 0),
//     rgba(0, 0, 0, 0.9) 40%
//   );
// `;

export const PortfolioItem = styled.li`
  border-radius: 10px;
  cursor: pointer;

  :hover {
    h4 {
      color: ${({ theme }) => theme.color.second};
    }
  }

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 15px auto calc(30px / 2) auto;
  }

  @media screen and (min-width: 768px) {
    margin: calc(30px / 2);
    flex-basis: calc(100% / 2 - 30px);
  }

  @media screen and (min-width: 1000px) {
    margin: calc(30px / 2);
    flex-basis: calc(100% / 3 - 30px);
  }
`;

export const WrapperImg = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 260px;
  position: relative;

  @media screen and (max-width: 1200px) {
    height: 200px;
  }

  @media screen and (max-width: 1000px) {
    height: 220px;
  }

  @media screen and (max-width: 767px) {
    height: 200px;
  }
`;

export const PortfolioImg = styled.img`
  width: 100%;
`;

export const TitlePortfolio = styled.h4`
  margin-top: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.g2};
  font-weight: 500;
  transition: color 350ms ease;
`;

export const SpanOverLay = styled.span`
  font-size: 14px;
  position: absolute;
  left: 15px;
  bottom: 15px;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 5px 15px;
  border-radius: 20px;
  color: ${({ theme }) => theme.color.g2};

  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }
`;

// export const ListOverLay = styled.ul`
//   list-style: initial;
//   margin-left: 15px;
//   margin: 5px 0 0 15px;
// `;
//
// export const TextOverLay = styled.li`
//   font-size: 16px;
//   margin-bottom: 5px;
//
//   @media screen and (max-width: 1200px) {
//     font-size: 14px;
//   }
// `;
