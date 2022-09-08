import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Complete from "../../assets/Complete.png"
import Button from "../../components/elements/Button"

const SignupComplete = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/login')
  }

  return (
    <StSignupComplete>
      <StCompleteWrap>
        <FisrtWrap>
          <StImg>
            <CompleteImg src={Complete} alt='Complete' />
          </StImg>
          <StText>
            <p style={{ fontSize: '24px' }}>
              <strong>조수정</strong>님,
            </p>
            <p style={{ fontSize: '24px', marginBottom: '25px' }}>
              홈커밍데이 가입을 환영합니다!
            </p>
            <p>모교 선후배들과 소통을 이어가보세요</p>
          </StText>
          <Button
          type='submit'
            width='100%'
            // padding='10px 0'
            style={{ marginTop: '100px' }}
            backgroundColor='#f7931e'
            color='white'
            onClickHandler={onClickHandler}
          >
            <ButtonTitle>
            시작하기
            </ButtonTitle>
          </Button>
        </FisrtWrap>
      </StCompleteWrap>
    </StSignupComplete>
  );
};

export default SignupComplete;

const StSignupComplete = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StCompleteWrap = styled.div`
  width: 85%;
  height: 100%;
`;

const FisrtWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 65px;
`;

const CompleteImg = styled.img`
  width: 100%;
`;

const StText = styled.div`
  text-align: center;
`

const ButtonTitle = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`