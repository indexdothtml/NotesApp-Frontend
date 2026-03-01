import { useSelector, useDispatch } from "react-redux";

import { openModal, closeModal } from "../features/modalSlice.js";

function useModal() {
  const isOpen = useSelector((state) => state.modal.open);

  const dispatch = useDispatch();

  const dispatchOpenModal = () => {
    dispatch(openModal());
  };

  const dispatchCloseModal = () => {
    dispatch(closeModal());
  };

  return {
    isOpen,
    dispatchOpenModal,
    dispatchCloseModal,
  };
}

export default useModal;
