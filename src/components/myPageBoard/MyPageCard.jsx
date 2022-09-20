import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { __getMyPage, __getMyArticle } from '../../redux/modules/MyPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import commentgray from "../../assets/commentgray.png"
import heartgray from '../../assets/heartgray.png';

const MyPageCard = ({ myarticle, id }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     dispatch(__getMyArticle())
    // }, [dispatch])

    const onClickNavi = () => {
        if (myarticle.articleFlag === "도움요청") {
            navigate(`/helpdetail/${id}`)
        } else if (myarticle.articleFlag === "정보공유") {
            navigate(`/informationdetail/${id}`)
        } else if (myarticle.articleFlag === "만남일정") {
            navigate(`/calendardetail/${id}`)
        } else if (myarticle.articleFlag === "자유토크") {
            navigate(`/freetalkdetail/${id}`)
        }
    };

    return (
        <>
            <Container onClick={onClickNavi}>
                <TotalWrap>
                    <CardHead>
                        <FlagWrap>{myarticle.articleFlag}</FlagWrap>
                    </CardHead>
                    <CardBody>
                        <BodyTitle>{myarticle.title}</BodyTitle>
                    </CardBody>
                    <CardFooter>
                        <CardFooterLeft>
                            <Views>조회수 {myarticle.views}</Views>
                            <div>|</div>
                            <HeadTime>{myarticle.createdAt}</HeadTime>
                        </CardFooterLeft>
                        <Count>
                            <CommentCount>
                                <CommentImg>
                                    <img src={commentgray} alt='댓글이미지' />
                                </CommentImg>
                                {myarticle.commentCnt}
                            </CommentCount>
                            <HeartCount>
                                <HeartImg>
                                    <img src={heartgray} alt='댓글이미지' />
                                </HeartImg>
                                {myarticle.heartCnt}
                            </HeartCount>
                        </Count>
                        {/* <Division>|</Division> */}
                        {/* <CommentCount>댓글 {help.commentCnt}</CommentCount> */}
                    </CardFooter>
                </TotalWrap>
            </Container>
        </>
    );
};

export default MyPageCard;

const Container = styled.div`
  height: 120px;
  /* padding: 10px; */
  border: 1px solid #eee;
  border-radius: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TotalWrap = styled.div`
    width: 90%;
    /* height: 100%; */
`

const CardHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const FlagWrap = styled.div`
    width: 60px;
    height: 20px;
    background-color: #fff4cc;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: #f7931e
`

const CardBody = styled.div`
  /* height: 50px; */
  /* margin-bottom: 20px; */
`;

const BodyTitle = styled.div`
  height: 45px;
  margin: 5px 0px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

const CardFooter = styled.div`
  display: flex;
  /* justify-content: start; */
  justify-content: space-between;
`;

const CardFooterLeft = styled.div`
    display: flex;
    gap: 10px;
    color: gray;
    align-items: center;
`

const HeadTime = styled.p`
  font-size: 12px;
  margin-left: auto;
  font-weight: 500;
`;
const Views = styled.div`
  font-size: 12px;
`;

const Count = styled.div`
  display: flex;
`;

const CommentCount = styled.div`
  font-size: 12px;
  color: gray;
  display: flex;
  margin-right: 10px;
`;

const CommentImg = styled.div`
  margin-right: 5px;
`

const HeartCount = styled.div`
  font-size: 12px;
  color: gray;
  display: flex;
`;

const HeartImg = styled.div`
  margin-right: 5px;
`