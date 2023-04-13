import { useEffect, useState } from 'react';
import { Nav, NavList, NavItem, NavText } from './Navigation.styled';
import useScrollScreen from 'services/scrollScreen';

export const Navigation = ({ setShowBurger }) => {
  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    const yOffset = -70;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollScreen = useScrollScreen();

  useEffect(() => {
    const sections = ['home', 'we', 'solution', 'projects'];
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const sectionPositions = sections.map(section => {
        const element = document.getElementById(section);
        return {
          id: section,
          offsetTop: element.offsetTop - 150,
          height: element.offsetHeight,
        };
      });

      const currentSectionIndex = sectionPositions.findIndex(
        section =>
          scrollTop >= section.offsetTop &&
          scrollTop < section.offsetTop + section.height
      );

      setActiveIndex(currentSectionIndex);
      setShowBurger(false);
    };

    handleScroll();
  }, [scrollScreen]);

  return (
    <Nav>
      <NavList>
        <NavItem active={activeIndex === 0}>
          <NavText href="#home" onClick={event => handleClick(event, 'home')}>
            Головна
          </NavText>
        </NavItem>
        <NavItem active={activeIndex === 1}>
          <NavText href="#we" onClick={event => handleClick(event, 'we')}>
            Наша команда
          </NavText>
        </NavItem>
        <NavItem active={activeIndex === 2}>
          <NavText
            href="#solution"
            onClick={event => handleClick(event, 'solution')}
          >
            Готові рішення
          </NavText>
        </NavItem>
        <NavItem active={activeIndex === 3}>
          <NavText
            href="#projects"
            onClick={event => handleClick(event, 'projects')}
          >
            Наші проекти
          </NavText>
        </NavItem>
      </NavList>
    </Nav>
  );
};
