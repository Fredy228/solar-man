import {
  BoxIntroComponents,
  BoxIntroImg,
  Gallery,
  InnerProjectOne,
  IntroComponentsItem,
  IntroComponentsList,
  IntroImg,
  IntroTitle,
  WrapperGallery,
  WrapperIntroProject,
} from './Portfolio.styled';
import { baseURL } from '../API/API';
import { GoBackBtn } from '../GoBackBtn/GoBackBtn';

export const ProjectsById = ({ post }) => {
  const components = JSON.parse(post.components);
  const gallery = post.galleryUrl ? JSON.parse(post.galleryUrl) : [];
  const reactImgView = gallery.map(item => ({
    original: `${baseURL}/${item.original}`,
    thumbnail: `${baseURL}/${item.mini}`,
  }));

  return (
    <InnerProjectOne>
      <GoBackBtn />
      <WrapperIntroProject>
        <BoxIntroImg>
          <IntroImg
            src={`${baseURL}/${post.urlImg}`}
            loading="lazy"
            alt={post.title}
          />
        </BoxIntroImg>
        <BoxIntroComponents>
          <IntroTitle>{post.title}</IntroTitle>
          <IntroComponentsList>
            {components && (
              <IntroComponentsItem>Встановлене обладнання:</IntroComponentsItem>
            )}
            {components &&
              components.map(item => (
                <IntroComponentsItem key={item}>{item}</IntroComponentsItem>
              ))}
          </IntroComponentsList>
        </BoxIntroComponents>
      </WrapperIntroProject>
      {gallery.length > 0 && (
        <WrapperGallery>
          <Gallery
            items={reactImgView}
            lazyLoad={true}
            showPlayButton={false}
          />
        </WrapperGallery>
      )}
    </InnerProjectOne>
  );
};
