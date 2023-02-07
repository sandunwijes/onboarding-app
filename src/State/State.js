import { createSlice } from "@reduxjs/toolkit";

export const userState = createSlice({
  name: "initialState",
  initialState: {
    step1: {
      fullName: "",
      telephone: "",
      email: "",
      country: "United States",
    },
    step2: {
      startValue: 10000,
      endValue: 100000,
      isInvestor: false,
    },
    step3: {
      preferences: [],
    },
  },
  reducers: {
    submitStep2: (state, action) => {
      return {
        ...state,
        step1: action.payload.data,
      };
    },
    submitStep3: (state, action) => {
      return {
        ...state,
        step2: action.payload.data,
      };
    },
    submitFinishStep: (state, action) => {
      return {
        ...state,
        step3: action.payload.data,
      };
    },
  },
});

export const { submitStep2, submitStep3, submitFinishStep } = userState.actions;

export default userState.reducer;
