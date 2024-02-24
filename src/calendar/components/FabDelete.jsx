import React from "react";
import { useCalendarStore } from "../../hooks/useCalendarStore";

const FabDelete = () => {
    const { startDeleteEvent, hasEventSelected } = useCalendarStore();
    const handleDelete = () => {
        startDeleteEvent();
    };
    return (
        <button
            style={{ display: hasEventSelected ? "" : "none" }}
            className="btn btn-danger fab-danger"
            onClick={handleDelete}
        >
            <i className="fas fa-trash-alt "></i>
        </button>
    );
};

export default FabDelete;
