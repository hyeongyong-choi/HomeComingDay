import React from 'react';
import styled from 'styled-components';
import HeaderTap from "./HeaderTap"

const Home = () => {
    return (
        <HomeContainer>
            <HeaderTap/>
            <input></input>
        </HomeContainer>
    );
};

export default Home;

const HomeContainer = styled.div`
    width: 100%;
    height: 809px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`