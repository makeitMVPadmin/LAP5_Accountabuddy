import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./main.js";
import PromptPage from "./pages/PromptPage/PromptPage";
import BackEndTest from "./backend/Backend.jsx";
import AiBackendTest from "./backend/AiBackendTest.js";
import { ChallengeDetails } from "./pages/ChallengeDetails/ChallengeDetails.jsx";
import LoadingPage from "./pages/LoadingPage/LoadingPage.jsx";
import TestPage from "./pages/TestPage/TestPage.jsx";
import ChallengePage from "./components/ChallengePage/ChallengePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt" element={<PromptPage />} />
        <Route path="/test" element={<BackEndTest />} />
        <Route path="/aitest" element={<AiBackendTest />} />
        <Route path="/challenge/:challengeId" element={<ChallengeDetails />} />
        <Route path="/TestPage" element={<ChallengePage />} />

        <Route path="/Testa" element={<LoadingPage />} />
        <Route path="/testfirebase" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
