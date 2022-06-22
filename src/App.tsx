import { useState } from "react";
import { Dashboard } from "./components/DashBoard";
import Header from "./components/Header";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

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

      <NewTransactionModal
        isOpen={isNewTranslationModalOpen}
        onRequestClose={handleCloseNewTranslationModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
