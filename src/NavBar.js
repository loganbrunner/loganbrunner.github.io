import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react';
import './NavBar.css';

const TopBar = styled.div`
padding-bottom: 50px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`

const HeaderName = styled.div`
position: fixed;
padding-top: 50px;
z-index: 2;
opacity: ${props => ((props.visibility - 30) / 100 ) * (150 / 100)}; // Change the 2nd to last number to adjust the speed of change
`

function NavBar() {
  const [activeItem, setActiveItem] = useState('home');
  const [scrollY, setScrollY] = useState('');

  function handleScroll() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <TopBar>
      {activeItem === 'home' ?
        <HeaderName visibility={scrollY}>
          <Header as='h1'>Logan Brunner</Header>
        </HeaderName>
        :
        <HeaderName visibility='1e3'>
          <Header as='h1'>Logan Brunner</Header>
        </HeaderName>
      }
      <Menu pointing secondary fixed='top' className='top-bar'>
        <Menu.Menu position='right'>
          <Menu.Item as={Link} to='/'
            name='home'
            active={activeItem === 'home'}
            onClick={() => setActiveItem('home')}
          />
          <Menu.Item
            as={Link} to='/research'
            name='research'
            active={activeItem === 'research'}
            onClick={() => setActiveItem('research')}
          />
          <Menu.Item
            as={Link} to='/about'
            name='about'
            active={activeItem === 'about'}
            onClick={() => setActiveItem('about')}
          />
        </Menu.Menu>
      </Menu>
    </TopBar>
  );
}

export default NavBar;
