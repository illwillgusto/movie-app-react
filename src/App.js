import React, { useEffect } from "react";

import { connect } from "react-redux"; 

import { checkUserAuthentication } from "./store/users/actions";
import "./scss/main.scss"
import AppRouter from ",/AppRouter";

const App = (props) => {
    useEffect(() => {
        props.checkUserAuthentication();

    }, []);
    return <AppRouter {...props} />;
};

const mapDispatchToProps = (dispatch) => ({
    checkUserAuthentication: () => dispatch(checkUserAuthentication()),
});

export default connect(null, mapDispatchToProps)(App);