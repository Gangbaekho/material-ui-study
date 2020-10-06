import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter as Router} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

// CssBaseline 을 여기다가 넣어주게 되면은
// 기본적으로 깔려져 있는 margin이나 padding 같은것을
// 없애준다는 뭐 그런개념이다 뭐 큰건 아니니까 참고만 할 수 있도록 한다.

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <CssBaseline/>
            <App />
        </Router>
    </React.StrictMode>
    , 
    document.getElementById("root"));

serviceWorker.unregister();
