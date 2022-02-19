import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Component/header";
import Home from "./Pages/Home";
import Coinpage from "./Pages/Coinpage";
import "./App.css";


function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<Coinpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
