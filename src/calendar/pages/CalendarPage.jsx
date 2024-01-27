import "react-big-calendar/lib/css/react-big-calendar.css";
import { Navbar } from "../components/Navbar";
import { Calendar } from "react-big-calendar";
import { addHours } from "date-fns";
import { localizer } from "../../helpers/calendarLocalizer";
import { getMessagesES } from "../../helpers/getMessages";
import CalendarEvent from "../components/CalendarEvent";
import CalendarModal from "../components/CalendarModal";
import { useState } from "react";

const events = [
    {
        title: "Cumpleaños del jefe",
        start: new Date(),
        end: addHours(new Date(), 2),
        bgcolor: "#fafafa",
        user: {
            _id: "123",
            name: "Fabian",
        },
    },
];

const CalendarPage = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')
    const onDoubleClick = (event) => {
        console.log({ doubleClick: event });
    };

    const onSelectEvent = (event) => {
        console.log({ click: event });
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
        </>
    );
};

export default CalendarPage;
