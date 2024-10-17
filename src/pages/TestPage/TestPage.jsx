import "./TestPage.scss";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Button } from "@mui/material";
import { PopUpModal } from "../../components/PopUpModal/PopUpModal";
import { getAllJobsData } from "../../utils/Functions/functions";
import LoadingPage from "../LoadingPage/LoadingPage";

const TestPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [jobs, setJobs] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllJobsData("Jobs");
      setJobs(result[0]);
      console.log(result[0]);
    };
    fetchData();
  }, []);

  const handleOpenPostModal = () => setModalOpen(true);
  const handleClosePostModal = () => setModalOpen(false);

  return (
    <div>
      <LoadingPage />
      <Modal
        id="promptpage__linkedinpost-modal"
        isOpen={isModalOpen}
        onRequestClose={handleClosePostModal}
        ariaHideApp={false}
        className="modalStyle"
        overlayClassName="modalOverlay"
        shouldCloseOnOverlayClick={false}
      >
        <PopUpModal title={{ title: "goal breakdown" }} closeButtonName="Close">
          hello this is the goal breakdown
          <Button
            className="successMessage__linkedin-btn"
            onClick={handleClosePostModal}
          >
            Close
          </Button>
        </PopUpModal>
      </Modal>
      <Button className="promptpage__post-btn" onClick={handleOpenPostModal}>
        goal
      </Button>
      Jobs data
      <div>{jobs?.title}</div>
    </div>
  );
};

export default TestPage;
