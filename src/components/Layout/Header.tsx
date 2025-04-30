import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
    background-color: white;
    color: #333;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
`;

const LogoText = styled(Typography)`
    font-weight: bold;
    font-size: 1.25rem;
    flex-grow: 1;
    cursor: pointer;
`;

const ContactButton = styled(Button)`
    background-color: #333;
    color: white;
    padding: 0.5rem 1.5rem;
    min-width: 120px;
    font-weight: 600;
    &:hover {
        background-color: #222;
    }
`;

const Header: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Обновленный способ использования Link */}
          <Link href="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            <LogoText>Some Company</LogoText>
          </Link>

          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <ContactButton variant="contained" color="primary">
              Contact us
            </ContactButton>
          </Link>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;