import { useState } from "react";
import { Dashboard } from "./components/DashBoard";
import Header from "./components/Header";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

function App() {
  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] =
    useState(false);

  function handleOpenNewTranslationModal() {
    setIsNewTranslationModalOpen(true);
  }

  function handleCloseNewTranslationModal() {
    setIsNewTranslationModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTranslationModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTranslationModalOpen}
        onRequestClose={handleCloseNewTranslationModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
