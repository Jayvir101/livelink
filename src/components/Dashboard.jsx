import React, { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import Options from "./Options";
import Notifications from "./Notifications";
import Header from "./Header";
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const {currentUser } = UserAuth();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <div className="main-container">
      <Header />
      <VideoPlayer/>
      <Options>
        <Notifications/>
      </Options>
    </div>
  );
}

export default Dashboard;
