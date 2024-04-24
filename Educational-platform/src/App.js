import './App.css';
import {
    BrowserRouter as Router,
    useRoutes,
} from "react-router-dom";

import AccountView from "./Views/AccountView";
import LoginView from "./Views/LoginView";
import MainView from "./Views/MainView";
import MoreNewsView from "./Views/MoreNewsView";
import JournalView from "./Views/JournalView";
import RegisterView from "./Views/RegisetView";
import TableView from "./Views/TableView";
import ProfessorsView from "./Views/ProfessorsView";
import GroupsView from "./Views/ProfessorsView";
import StaffView from "./Views/StaffView";

function App() {
    const Test = () => {
        const routes = useRoutes([
            { path: "/", element: <MainView /> },
            { path: "/account", element: <AccountView /> },
            { path: "/register", element: <RegisterView />},
            { path: "/login", element: <LoginView /> },
            { path: "/news", element: <MoreNewsView /> },
            { path: "/journal", element: <JournalView/> },
            { path: "/table", element: <TableView/> },
            { path: "/groups", element: <GroupsView/>},
            { path: "/professors", element: <ProfessorsView/>},
            { path: "/staff", element: <StaffView/>},
        ]);
        return routes;
    };

  return (
    <>
        <Router>
            <Test/>
        </Router>
    </>
  );
}

export default App;
