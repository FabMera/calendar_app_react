import "react-big-calendar/lib/css/react-big-calendar.css";
import { Navbar } from "../components/Navbar";
import { Calendar } from "react-big-calendar";
import { localizer } from "../../helpers/calendarLocalizer";
import { getMessagesES } from "../../helpers/getMessages";
import CalendarEvent from "../components/CalendarEvent";
import CalendarModal from "../components/CalendarModal";
import { useState } from "react";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import FabAddNew from "../components/FabAddNew";
import FabDelete from "../components/FabDelete";


const CalendarPage = () => {
    const { openDateModal } = useUiStore();
    const { events ,setActiveEvent} = useCalendarStore();

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')
    const onDoubleClick = (event) => {
        openDateModal();
    };

    const onSelectEvent = (event) => {
        setActiveEvent(event)
    
    };

    const onViewChange = (event) => {
        //console.log({ viewChanged: event });
        localStorage.setItem('lastView', event)
    };
    return (
        <>
            <Navbar />
            <Calendar
                defaultView={lastView}
                culture="es"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 450 }}
                messages={getMessagesES()}
                components={{
                    event: CalendarEvent,
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
            />
            <CalendarModal />
            <FabAddNew />
            <FabDelete />
        </>
    );
};

export default CalendarPage;
