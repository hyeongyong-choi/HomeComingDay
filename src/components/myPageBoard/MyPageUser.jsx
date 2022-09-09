import React from 'react';
import styled from 'styled-components';
import { AiOutlineCamera } from "react-icons/ai";
import { removeCookie } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from "universal-cookie";

const MyPageUser = () => {

    const navigate = useNavigate();
    const mypages = useSelector((state) => state.mypages);
    const {myarticles} = useSelector((state) => state.mypages.myarticles);
    console.log(mypages);
    console.log(myarticles);
    const cookies = new Cookies();

    return (
        <UserContainer>
            <UserImgWrap>
                <UserImg>
                    <UserImgUpload>
                        <AiOutlineCamera size="18" style={{ color: "white" }} />
                    </UserImgUpload>
                </UserImg>
            </UserImgWrap>
            <UserInfo>
                <FirstWrap>
                    <UserUniversity>
                        한국대학교
                    </UserUniversity>
                    <UserWrap>
                        <UserName>{cookies.get("username")}</UserName>
                        <UserAdmission>| 14학번</UserAdmission>
                    </UserWrap>
                    <UserEmail>
                        cjaeks0394@naver.com
                    </UserEmail>
                </FirstWrap>
                <SecondWrap>
                    <LogoutButton
                    onClick={()=>{
                        removeCookie("accessToken")
                        removeCookie("refreshToken")
                        removeCookie("userName")
                        navigate("/login")
                    }}
                    >
                        <LogoutTitle>로그아웃</LogoutTitle>
                    </LogoutButton>
                </SecondWrap>
            </UserInfo>
        </UserContainer>
    );
};

export default MyPageUser;

const UserContainer = styled.div`
    width: 90%;
    height: 78%;
    display: flex;
    /* border: 1px solid green; */
`

const UserImgWrap = styled.div`
    width: 25%;
    height: 100%;
    /* border: 1px solid green; */
    display: flex;
    justify-content: center;
`

const UserImg = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #f9f9f9;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`

const UserImgUpload = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`
const UserInfo = styled.div`
    width: 75%;
    height: 100%;
    /* border: 1px solid purple; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const FirstWrap = styled.div`
    /* border: 1px solid red; */
    width: 95%;
    height: 100%;
    margin-top: 5px;
`
const SecondWrap = styled.div`
    width: 95%;
`

const UserUniversity = styled.div`
    font-weight: 600;
    font-size: 15px;
`
const UserWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
const UserName = styled.div`
    font-weight: 700;
    font-size: 20px;
`
const UserAdmission = styled.div`
    color: white;
`
const UserEmail = styled.div`
    font-weight: 500;
    font-size: 12px;
    /* color: #f7931e; */
    color: white;
`
const LogoutButton = styled.div`
    width: 76px;
    height: 22px;
    /* height: 100%; */
    border: 1px solid white;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    cursor: pointer;
`
const LogoutTitle = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: white;
`
