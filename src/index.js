import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme ,ThemeProvider } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";

// 이런식으로 theme을 overide 할 수 있다는 건데
// 즉, 기존에 있던걸 그대로 쓰면서 내가 설정한것만 바꾼다는 그런 의미이다.
// 밑에 있는것처럼 purple이라는 material ui가 만든 것을 사용해도 되지만,
// 직접 만들 수 도 있다 . 하지만 main이라는 property가 포함된 object로 만들어야 한다.
// 그리고 #가 포함된 핵사코드로 만들어야 한다는 것도 알아야 한다.

// const theme = createMuiTheme({
//     palette:{
//         type:'dark'
//     }
// })

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    , 
    document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
