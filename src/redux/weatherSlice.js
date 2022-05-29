import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    dailyForecast: null,
  },
  reducers: {
    updateDailyForecast: (state, action) => {
      state.dailyForecast = action.payload;
    },
  },
  extraReducers: {},
});

export const { updateDailyForecast } = weatherSlice.actions;
export default weatherSlice.reducer;

