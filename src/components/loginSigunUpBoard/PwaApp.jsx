import React from 'react';
import styled from 'styled-components';
import { useReactPWAInstall } from 'react-pwa-install';
import logo192 from '../../assets/logo192.png'

const PwaApp = () => {
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();
  const pwaClick = () => {
    pwaInstall({
      title: '홈커밍데이 다운받기',
      logo: logo192,
    })
      .then(() => {})
      .catch(() => {});
  };

  return (
    <>
      {supported() && !isInstalled() && (
        <StPwaButton type='button' onClick={pwaClick}>
          어플 다운받기
        </StPwaButton>
      )}
    </>
  );
};

export default PwaApp;

const StPwaButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  border: 1px solid #f7931e;
  background-color: #fff;
  color: #f7931e;
  padding: 3px 12px;
`;
