import { configureStore } from "@reduxjs/toolkit";
import contractReducer from "store/features/ContractSlice";

export default configureStore({
  reducer: {
    contracts: contractReducer,
  },
});
