import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import styled from 'styled-components';
import { StyledLoader } from "../StyledLoader";

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  `

export const Loader = () => {
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 50);
  
    if (progress >= 100) {
      navigate('/email');
    }
  
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  return (
    <LoaderWrapper>
      <StyledLoader progress={progress}>
        <span className="progress">{progress}%</span>
        <h3 className="text">{t("loader")}</h3>
      </StyledLoader>
    </LoaderWrapper>
  );
};
