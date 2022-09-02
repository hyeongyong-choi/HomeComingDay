import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NaverLogin from "../components/NaverLogin";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import MainPage from "../pages/MainPage"

import HelpForm from "../components/helpBoard/HelpForm";

import InformationPage from "../pages/InformationPage";
import FreeTalkPage from "../pages/FreeTalkPage";
import SchoolInfoPage from '../pages/SchoolInfoPage';
import ScrollTest from "../components/test/ScrollTest"
import InformationForm from "../components/informationBoard/InformationForm";
import HelpCard from "../components/helpBoard/HelpCard";
import FreeTalkForm from "../components/freeTalkBoard/FreeTalkForm"
import CalendarDetail from "../components/calendarBoard/CalendarDetail"
import CalendarPage from "../pages/CalendarPage"
import Form from "../components/test/Form"
import Form2 from "../components/test/Form2";
import HelpDetail from "../components/helpBoard/HelpDetail";
import HelpUpdate from "../components/helpBoard/HelpUpdate";
import SearchPage from "../pages/SearchPage";
import SearchCard from "../components/searchBoard/SearchCard";
import ChatPage from "../pages/ChatPage"
import ChatFormPage from "../pages/ChatFormPage"
import SignupCompletePage from '../pages/SignupCompletePage';
import NoticePage from "../pages/NoticePage";
import SearchModal from "../components/searchBoard/SearchModal";

const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/naverlogin" element={<NaverLogin />} />
        <Route path="/schoolinfo" element={<SchoolInfoPage />}></Route>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/helpform" element={<HelpForm />}/>
        <Route path="/informationform" element={<InformationForm />}/>
        <Route path="/information" element={<InformationPage />} />
        <Route path="/freetalk" element={<FreeTalkPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chatform" element={<ChatFormPage />} />
        <Route path="/signupcomplete" element={<SignupCompletePage />} />
        <Route path="/notice" element={<NoticePage />} />
        {/* 하단 페이지 추후 정리 */}
        <Route path="/test" element={<ScrollTest />} />
        <Route path="/helpcard" element={<HelpCard />} />
        <Route path="/freetest" element={<FreeTalkForm />} />
        <Route path="/searchcard" element={<SearchCard />} />
        <Route path="/searchmodal" element={<SearchModal />} />
        <Route path="/form" element={<Form2 />} />
        <Route path="/helpdetail/:id" element={<HelpDetail />} />
        <Route path="/helpupdate/:id" element={<HelpUpdate />} />
        <Route path="/calendardetail/:id" element={<CalendarDetail />} />


      </Routes>
    </BrowserRouter>
  );
};
export default Router;