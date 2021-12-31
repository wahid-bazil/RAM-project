import {createSlice} from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: {phase: 0},
    reducers: {
        updatePhase(state) {
            state.phase += 1
        }
    },
})
export const selectUi = (state: any) => state.ui.phase;
export const uiActions = uiSlice.actions;
export default uiSlice;
