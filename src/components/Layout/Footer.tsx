import React from 'react';
import { Container } from '@mui/material';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #333;
    color: white;
    padding: 2rem 0;
    margin-top: auto;
`;

const FooterText = styled.p`
    font-size: 0.875rem;
    text-align: center;
    margin: 0;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <FooterText>
          Some Company {currentYear}
        </FooterText>
      </Container>
    </FooterContainer>
  );
};

export default Footer;