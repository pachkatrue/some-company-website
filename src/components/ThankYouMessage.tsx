import React from 'react';
import styled from 'styled-components';

interface ThankYouMessageProps {
  message: string;
}

const MessageContainer = styled.div`
    padding: 4rem 2rem;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
`;

// Используем нативный h1 вместо Typography с component="h1"
const MessageText = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.75rem;
    }
`;

const ThankYouMessage: React.FC<ThankYouMessageProps> = ({ message }) => {
  return (
    <MessageContainer>
      <MessageText>
        {message}
      </MessageText>
    </MessageContainer>
  );
};

export default ThankYouMessage;