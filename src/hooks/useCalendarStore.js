import { useSelector, useDispatch } from 'react-redux'
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent, onDeleteEvent } from '../store/calendar/calendarSlice'; //funciones que modifican el estado reducers


export const useCalendarStore = () => {
    const dispatch = useDispatch();
    //Para cambiar el estado de activeEvent en el store
    const { events, activeEvent } = useSelector(state => state.calendar)

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }
    const startSavingEvent = async (calendarEvent) => {
        //TODO: grabar en la base de datos
        if (calendarEvent._id) {
            //actualizar
            dispatch(onUpdateEvent(calendarEvent))
        } else {
            //agregar
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
        }
    }
    const startDeleteEvent = () => {
        dispatch(onDeleteEvent())
    }


    return {
        //propiedades para obtener el estado
        events,
        activeEvent,
        hasEventSelected: !!activeEvent, //si activeEvent es null o undefined, hasEventSelected es false, si no es true
        //metodos para cambiar el estado
        startDeleteEvent,
        setActiveEvent,
        startSavingEvent
    }
}