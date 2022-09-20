import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyPageUser from './MyPageUser';
import MyPageCard from './MyPageCard';
import { __getMyArticle } from '../../redux/modules/MyPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import nonedatasquare from '../../assets/nonedatasquare.png';
import Homeimg from '../../assets/Home.png';
import Searchimg from '../../assets/Search.png';
import Chatimg from '../../assets/Chat.png';
import MyColorimg from '../../assets/MyColor.png';

const MyPageHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myarticles = useSelector((state) => state.mypages.myarticles);
  // const {error} = useSelector((state) => state.mypages.myarticles)
  console.log(myarticles);
  // console.log(error);

  // useEffect(() => {
  //   dispatch(__getMyArticle());
  // }, [dispatch]);

  //무한 스크롤

  const targetRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(0);
  
  const checkIntersect = useCallback(([entry], observer) => {
    if(entry.isIntersecting && !isLoaded){
      console.log("page", page);
      dispatch(__getMyArticle(page));
      observer.unobserve(entry.target);
      setPage((prev) => prev + 1);
    }
  }, [dispatch, isLoaded, page])

  useEffect(() => {
    let observer;
    console.log(Boolean(targetRef))
    if(targetRef){
      observer = new IntersectionObserver(checkIntersect, {
        threshold: 0.5,
      })
      observer.observe(targetRef.current);
      console.log("a")
    }
  }, [myarticles]);

  // console.log("myarticles", myarticles);
  // console.log("page", page);


  return (
    <HomeContainer>
      <MyPageTop>
        <MyPageUser />
      </MyPageTop>
      <MyPageBottom>
        <BottomWrap>
          <TitleWrap>
            <MyPostTitle>내가 쓴 게시글</MyPostTitle>
            <PostCount>{myarticles && myarticles.length}</PostCount>
          </TitleWrap>
          <ArticleWrap>
            {myarticles && myarticles.length > 0 ? (
              <div>
                {myarticles && myarticles.map((myarticle) => (
                      <MyPageCard key={myarticle.articleId} id={myarticle.articleId} myarticle={myarticle}
                      />
                    ))}
              </div>
            ) : (
              <NoneData>
                <NoneDataImg />
                <p>내가 쓴 게시글이 없습니다</p>
              </NoneData>
            )} 
            <div ref={targetRef}
            style={{border: "1px solid red"}}
            >1</div>
          </ArticleWrap>
        </BottomWrap>
      </MyPageBottom>
      <SecondWrap>
        <Bottom>
          <Tap
            onClick={() => {
              navigate('/main');
            }}
            style={{ paddingLeft: '20px' }}
          >
            <img
              src={Homeimg}
              alt='홈'
              style={{ width: '45%', margin: '2px' }}
            />
            <TapTitle style={{ color: '#8E8E8E' }}>홈</TapTitle>
          </Tap>
          <Tap
            onClick={() => {
              navigate('/search');
            }}
          >
            <img
              src={Searchimg}
              alt='검색'
              style={{ width: '45%', margin: '2px' }}
            />
            <TapTitle style={{ color: '#8E8E8E' }}>검색</TapTitle>
          </Tap>
          <Tap
            onClick={() => {
              navigate('/chat');
            }}
          >
            <img
              src={Chatimg}
              alt='채팅'
              style={{ width: '45%', margin: '2px' }}
            />
            <TapTitle style={{ color: '#8E8E8E' }}>채팅</TapTitle>
          </Tap>
          <Tap
            style={{ paddingRight: '20px', color: '#f7931e' }}
            onClick={() => {
              navigate('/mypage');
            }}
          >
            <img
              src={MyColorimg}
              alt='마이페이지'
              style={{ width: '45%', margin: '2px' }}
            />
            <TapTitle style={{ fontWeight: 'bold' }}>MY</TapTitle>
          </Tap>
        </Bottom>
      </SecondWrap>
    </HomeContainer>
  );
};

export default MyPageHome;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MyPageTop = styled.div`
  width: 100%;
  /* height: 200px; */
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7931e;
  /* border: 1px solid red; */
`;

const MyPageBottom = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  /* border: 1px solid blue; */
`;
const ArticleWrap = styled.div`
  height: 85%;
  /* height: 100%; */
  border: 1px solid green;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    /* background-color: red; */
  }
`;
const BottomWrap = styled.div`
  width: 90%;
  height: 100%;
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0 15px 0;
  gap: 10px;
`;
const NoneData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #b3b3b3;
  font-weight: 500;
  font-size: 16px;
`;

const NoneDataImg = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${nonedatasquare});
  background-position: center;
  background-size: 100% 100%;
`;

const MyPostTitle = styled.div`
  color: #bebebe;
`;

const PostCount = styled.div`
  color: #f7931e;
`;
const SecondWrap = styled.div`
  width: 100%;
  position: sticky;
  background-color: #ffffff;
  bottom: 0;
  box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.2);
`;
const Bottom = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
const TapTitle = styled.div`
  font-size: 11px;
  font-weight: 400;
`;
