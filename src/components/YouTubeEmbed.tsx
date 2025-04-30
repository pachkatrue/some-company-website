import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

// Определяем интерфейс пропсов
interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 250px;
    background-color: #e0e0e0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// Используем метод отношения сторон через padding-bottom
const AspectRatioContainer = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 56.25%; /* Соотношение 16:9 */
`;

const ContentContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const YouTube = styled.div`
    width: 100%;
    height: 100%;
`;

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
                                                     videoId,
                                                     title = 'YouTube video'
                                                   }) => {
  const youtubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = youtubeRef.current;

    if (!currentRef) return;

    // Сначала очищаем содержимое
    currentRef.innerHTML = '';

    try {
      // Создаем iframe напрямую для оптимальной производительности
      const iframe = document.createElement('iframe');
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.src = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`;
      iframe.title = title;
      iframe.frameBorder = '0';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';

      currentRef.appendChild(iframe);
    } catch (error) {
      console.error('Ошибка при создании YouTube iframe:', error);
    }

    return () => {
      if (currentRef) {
        currentRef.innerHTML = '';
      }
    };
  }, [videoId, title]); // Зависимости эффекта

  return (
    <YouTubeContainer>
      <AspectRatioContainer>
        <ContentContainer>
          <YouTube
            ref={youtubeRef}
            aria-label={`YouTube video: ${title}`}
            role="region"
          />
        </ContentContainer>
      </AspectRatioContainer>
    </YouTubeContainer>
  );
};

export default YouTubeEmbed;