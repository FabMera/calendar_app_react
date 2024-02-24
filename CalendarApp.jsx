import { BrowserRouter } from "react-router-dom";
import AppRouter from "./src/router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

const CalendarApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    );
};

export default CalendarApp;
