import {Route, Routes as Switch} from "react-router-dom";
import {routes} from "../defaults";

const Router = () => {

    return (
        <Switch>
            {routes.map((route) => (
                <Route path={route.path} element={<route.component />}/>
            ))}
        </Switch>
    )
}

export default Router;