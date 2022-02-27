import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//import UpdateCompany from './IT/UpdateCompany'
import Register from "./Register";
import Login from "./Login";
import axios from "axios";
import Cookie from "js-cookie";
import CompanyList from "./CompanyList";
import AddCompany from "./AddCompany";
import UpdateCompany from "./UpdateCompany";
import ViewInfo from "./ViewInfo";

function App() {
  const [login, setLogin] = useState(false);
  const [cred, setCred] = useState([]);
  axios.defaults.baseURL = "http://localhost:8080/api/v1/";

  function tempAlert(msg, duration, status) {
    var box = document.createElement("div");
    box.setAttribute(
      "style",
      status
        ? " position:absolute;left:40%; margin:auto;top:22%;background-color:#95CD41;color:#fff;width:300px; box-shadow: 0 1px 5px rgb(138, 137, 137);padding:15px;border-radius:5px;"
        : " position:absolute;left:40%; margin:auto;top:10%;background-color:#F14A16;color:#fff;width:300px; box-shadow: 0 1px 5px rgb(138, 137, 137);padding:15px;border-radius:5px;"
    );
    box.innerHTML = msg;
    setTimeout(function () {
      box.parentNode.removeChild(box);
    }, duration);
    document.body.appendChild(box);
  }

  async function onLogin(val) {
    const temp = cred.filter((item) => {
      return item.username === val.username && val.password === item.password;
    });
    if (temp.length === 0) {
      setLogin(false);
      tempAlert("Invalid Credentials....!", 2000, false);
    } else {
      setLogin(true);
      Cookie.set("isLogin", "yes");
      tempAlert("Login Successfull...", 2000, true);
    }
  }

  function readLogin() {
    const userlogin = Cookie.get("isLogin");
    if (userlogin) {
      setLogin(true);
    }
  }

  function logout() {
    Cookie.remove("isLogin");
    setLogin(false);
  }

  useEffect(() => {
    let api = true;

    readLogin();
    if (api) {
      axios.get(`/Users`).then((res) => {
        setCred(res.data);
      });
    }
    return () => {
      api = false;
    };
  }, [cred]);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            {login ? <CompanyList logout={logout}/> : <Redirect to="/login" />}
          </Route>

          <Route path="/add-company" exact>
            {login ? <AddCompany logout={logout}/> : <Redirect to="/login" />}
          </Route>

          <Route path="/update-company/:id" exact>
            {login ? <UpdateCompany logout={logout}/> : <Redirect to="/login" />}
          </Route>

          <Route path="/view-info/:id" exact>
            {login ? <ViewInfo logout={logout}/> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            {login ? <Redirect to="/" /> : <Login onLogin={onLogin} />}
          </Route>

          <Route path="/register">
            {login ? <Redirect to="/" /> : <Register/>}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
