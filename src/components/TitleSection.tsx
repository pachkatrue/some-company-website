import React from 'react';
import styled from 'styled-components';
import YouTubeEmbed from './YouTubeEmbed';

interface TitleSectionProps {
  title: string;
  subtitle?: string;
  content?: string;
  videoId?: string;
}

const SectionContainer = styled.section`
    padding: 4rem 2rem;
    background-color: #f5f5f5;
    width: 100%;

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
`;

const ContentWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const Column = styled.div`
    width: 50%;
    flex: 0 0 50%;

    @media (max-width: 768px) {
        width: 100%;
        flex: 0 0 100%;
    }
`;

// Контейнер для текстового контента
const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    @media (max-width: 768px) {
        margin-bottom: 2rem;
    }
`;

const MainTitle = styled.h1`
    font-weight: 700;
    margin-bottom: 1.5rem;
    font-size: 2.5rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const BodyText = styled.p`
    font-size: 1rem;
    line-height: 1.6;
`;

// Контейнер для видео с минимальной высотой
const VideoContainer = styled.div`
    width: 100%;
    min-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TitleSection: React.FC<TitleSectionProps> = ({
                                                     title,
                                                     subtitle,
                                                     content,
                                                     videoId
                                                   }) => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <Column>
          <TextContent>
            <MainTitle>
              {title}
            </MainTitle>
            {subtitle && (
              <Subtitle>
                {subtitle}
              </Subtitle>
            )}
            {content && (
              <BodyText>
                {content}
              </BodyText>
            )}
          </TextContent>
        </Column>
        <Column>
          <VideoContainer>
            {videoId ? (
              <YouTubeEmbed videoId={videoId} title="Featured video" />
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                minHeight: '250px',
                backgroundColor: '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                YouTube video
              </div>
            )}
          </VideoContainer>
        </Column>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default TitleSection;