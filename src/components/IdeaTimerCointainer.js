import React, { useState, useRef } from "react";
import IdealTimer from "react-idle-timer";
import Modal from "react-modal";

function IdeaTimerCointainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const idealTimerRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const sessionTimoutRef = useRef(null);

  const onIdle = () => {
    console.log("User is idle");
    setModalIsOpen(true);
    sessionTimoutRef.current = setTimeout(logOut, 5000);
  };

  const stayActive = () => {
    setModalIsOpen(false);
    console.log("user is active");
  };

  const logOut = () => {
    setModalIsOpen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionTimoutRef.current);
    console.log("User has logged out");
  };

  return (
    <div>
      {isLoggedIn ? <h2>Hello Viswas</h2> : <h2>Hello Guests</h2>}
      <Modal isOpen={modalIsOpen}>
        <h2>You have been idle for a while</h2>
        <p>you will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>Sign In</button>
        </div>
      </Modal>
      <IdealTimer
        ref={idealTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      ></IdealTimer>
    </div>
  );
}

export default IdeaTimerCointainer;
