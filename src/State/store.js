import { configureStore } from "@reduxjs/toolkit";
import userState from "./State";

export default configureStore({
  reducer: {
    userState: userState,
  },
});
