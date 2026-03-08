import { openModal, closeModal } from "../features/modalSlice.ts";
import { useAppSelector, useAppDispatch } from "./useStore.ts";

function useModal() {
  const isOpen = useAppSelector((state) => state.modal.open);

  const dispatch = useAppDispatch();

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
