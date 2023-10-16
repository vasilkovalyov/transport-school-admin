import { useState } from 'react';

export default function useAlertMessageModal() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function onOpenModal(id: string) {
    setSelectedId(id);
    setOpenModal(true);
  }

  function onCloseModal() {
    setOpenModal(false);
  }

  return {
    openModal,
    selectedId,
    onOpenModal,
    onCloseModal,
  };
}
