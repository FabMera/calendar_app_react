import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvents =
{
    _id: new Date().getTime(),
    title: "Cumpleaños del jefe",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgcolor: "#fafafa",
    user: {
        _id: "123",
        name: "Fabian",
    },
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvents
        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push(payload);
            state.activeEvent = null;//limpiamos el activeEvent
        },
        onUpdateEvent: (state, { payload }) => {
            state.events = state.events.map(event => event._id === payload._id ? payload : event)
        },
        onDeleteEvent: (state) => {
            if (state.activeEvent) {
                state.events = state.events.filter(e => e._id !== state.activeEvent._id); //borramos el evento activo y filtramos los demas.
                state.activeEvent = null;//limpiamos el activeEvent
            }
        }
    }
});



export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;