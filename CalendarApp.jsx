import { BrowserRouter } from "react-router-dom";
import AppRouter from "./src/router/AppRouter";

const CalendarApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default CalendarApp;
