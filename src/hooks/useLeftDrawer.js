import { useSelector, useDispatch } from "react-redux";

import { openDrawer, closeDrawer } from "../features/leftDrawerSlice";

function useLeftDrawer() {
  const isOpen = useSelector((state) => state.leftDrawer.open);

  const dispatch = useDispatch();

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
