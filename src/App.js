import { Routes, Route } from "react-router-dom";
import Home from "./main.js";
import PromptPage from "./pages/PromptPage/PromptPage";
import BackEndTest from "./backend/Backend.jsx";
import AiBackendTest from "./backend/AiBackendTest.js";
import LoadingPage from "./pages/LoadingPage/LoadingPage.jsx";
import TestPage from "./pages/TestPage/TestPage.jsx";
import ChallengeCard from "./components/ChallengeCard/ChallengeCard.jsx";

function App() {
  const user_id = "0FzkmsfQ1FMpTOTFnsQn";
  useEffect(async () => {
    const response = await getUserDetails(user_id);
    console.log(response);
    // this will fetch user details from firebase and update the user state in App component.
    // If the user is not authenticated, they will be redirected to the login page.
    // If the user is authenticated, they will be redirected to the home page.
    // This is done in the App component's useEffect hook.
    // The user state is updated in the App component's state and props.
    // The useEffect hook ensures that the getUserDetails function is only called when the user state changes.
    // This is necessary because the user state is updated when the user's details are fetched from Firebase.
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt" element={<PromptPage />} />
        <Route path="/test" element={<BackEndTest />} />
        <Route path="/aitest" element={<AiBackendTest />} />
        <Route path="/Testa" element={<LoadingPage />} />
        <Route path="/TestPage" element={<ChallengeCard />} />
        <Route path="/Testa" element={<LoadingPage />} />
        <Route path="/testfirebase" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
