import { createSlice } from "@reduxjs/toolkit";

export const tagged = createSlice({
  name: 'tagged',
  initialState:{
    tagged: "",
    page: 1,
  },
  reducers:{
    selectTagged: (state, action) => {
      state.tagged = action.payload
    }
  }
})


export const { selectTagged } = tagged.actions;
export default tagged.reducer;