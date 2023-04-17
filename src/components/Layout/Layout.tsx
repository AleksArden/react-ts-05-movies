import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, List, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <List>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </List>
        </nav>
      </Header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
