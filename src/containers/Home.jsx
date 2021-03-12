import React, { useState } from "react";
import Modal from "../components/Modal.jsx";

const Home = () => {
  const [showModal, setModal] = useState(false);
  return (
    <div>
      <h1>Hello World</h1>
      <div className="main">
        <button onClick={() => setModal(!showModal)}>click here</button>
      </div>
      {showModal ? (
        <Modal>
          <h1>Success comes to those who persist</h1>
          <div className="buttons">
            <button onClick={() => setModal(!showModal)}>
              {"Close modal"}
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Home;
