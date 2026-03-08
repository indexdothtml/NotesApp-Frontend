import { openDrawer, closeDrawer } from "../features/leftDrawerSlice.ts";
import { useAppSelector, useAppDispatch } from "./useStore.ts";

function useLeftDrawer() {
  const isOpen = useAppSelector((state) => state.leftDrawer.open);

  const dispatch = useAppDispatch();

  const dispatchOpenDrawer = () => {
    dispatch(openDrawer());
  };

  const dispatchCloseDrawer = () => {
    dispatch(closeDrawer());
  };

  return {
    isOpen,
    dispatchOpenDrawer,
    dispatchCloseDrawer,
  };
}

export default useLeftDrawer;
