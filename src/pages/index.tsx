import React from 'react';
import Layout from '@/components/Layout/Layout';
import TitleSection from '@/components/TitleSection';
import {
  Container,
  Button
} from '@mui/material';
import styled from 'styled-components';
import Link from 'next/link';

// Контейнер для секций сайта
const SectionContainer = styled.section`
    padding: 4rem 0;

    @media (max-width: 768px) {
        padding: 2rem 0;
    }
`;

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 700;
    font-size: 2rem;

    @media (max-width: 768px) {
        margin-bottom: 2rem;
        font-size: 1.75rem;
    }
`;

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

// Элемент списка фич
const FeatureItem = styled.div`
    text-align: left;
    margin-bottom: 1rem;
    height: 100%;
`;

// Заголовок фичи
const FeatureTitle = styled.h3`
    margin-bottom: 0.75rem;
    font-weight: 600;
    font-size: 1.5rem;
`;

// Текст параграфа
const FeatureText = styled.p`
    font-size: 1rem;
    line-height: 1.6;
`;

// Обертка для контейнера кнопки
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

// Стилизованная кнопка связи
const ContactButton = styled(Button)`
    padding: 0.5rem 1.5rem;
    min-width: 120px;
    width: auto;
    font-weight: 600;
`;

// Нижняя секция с другим фоном для визуального разделения
const BottomSection = styled.section`
    background-color: #f5f5f5;
    padding: 4rem 0;
    text-align: center;

    @media (max-width: 768px) {
        padding: 2rem 0;
    }
`;

// Заголовок нижней секции
const BottomTitle = styled.h2`
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 700;
`;

const HomePage = () => {
  // Временный текст для демонстрации
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lorem tincidunt ante";

  // Массив для генерации элементов секции с фичами
  const featuresData = Array(6).fill({
    title: "Title",
    content: loremIpsum
  });

  return (
    <Layout>
      {/* Секция с заголовком и видео */}
      <TitleSection
        title="Most important title on the page"
        content={loremIpsum}
        videoId="dQw4w9WgXcQ"
      />

      {/* Секция с фичами */}
      <SectionContainer>
        <Container maxWidth="lg">
          <SectionTitle>
            Also very important title
          </SectionTitle>

          <FeaturesGrid>
            {featuresData.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureTitle>
                  {feature.title}
                </FeatureTitle>
                <FeatureText>
                  {feature.content}
                </FeatureText>
              </FeatureItem>
            ))}
          </FeaturesGrid>

          <ButtonContainer>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <ContactButton
                variant="contained"
                color="primary"
                size="large"
              >
                Contact us
              </ContactButton>
            </Link>
          </ButtonContainer>
        </Container>
      </SectionContainer>

      {/* Нижняя секция с призывом к действию */}
      <BottomSection>
        <Container maxWidth="md">
          <BottomTitle>
            Less important title
          </BottomTitle>

          <ButtonContainer>
            {/* Обновленный способ использования Link с Button */}
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <ContactButton
                variant="contained"
                color="primary"
                size="large"
              >
                Contact us
              </ContactButton>
            </Link>
          </ButtonContainer>
        </Container>
      </BottomSection>
    </Layout>
  );
};

export default HomePage;