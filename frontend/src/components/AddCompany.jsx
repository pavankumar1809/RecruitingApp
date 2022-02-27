import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function AddCompany(props) {
  const [company, setCompany] = useState({
    name: "",
    website: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    industry: "",
  });
  const history = useHistory()
  function tempAlert(msg, duration, status) {
    var box = document.createElement("div");
    box.setAttribute(
      "style",
      status
        ? " position:fixed;left:40%; margin:auto;top:22%;background-color:#95CD41;color:#fff;width:300px; box-shadow: 0 1px 5px rgb(138, 137, 137);padding:15px;border-radius:5px;"
        : " position:fixed;left:40%; margin:auto;top:10%;background-color:#F14A16;color:#fff;width:300px; box-shadow: 0 1px 5px rgb(138, 137, 137);padding:15px;border-radius:5px;"
    );
    box.innerHTML = msg;
    setTimeout(function () {
      box.parentNode.removeChild(box);
    }, duration);
    document.body.appendChild(box);
  }
  function handleChange(e) {
    const { name, value } = e.target;

    setCompany((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(company.name!=="" && company.website!=="" && company.phone!=="" && company.address!=="" && company.city!=="" && company.state!=="" && company.country!=="" && company.industry!==""){
      var res = company.website.match("([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$")
      if(res===null){
        tempAlert("Wrong website format....!", 2000, false)
      }
      else{
        axios.post(`/Companies`,company).then(res=>{
          console.log(res.data);
      })
        tempAlert("Added Successfully.....",2000, true)
        history.push("/")
      }
    }
    else{
      tempAlert("Fill all the details....!",2000,false)
    }
  }

  return (
    <div>
      <div>
        <ul className="nav">
          <li>
            <Link to="/">
              <img
                src="https://img.icons8.com/material-rounded/48/000000/home-page.png"
                alt="home"
              />
            </Link>
          </li>
          <h2 style={{ color: "#fff" }} id="head">
            Add Company
          </h2>

          <li>
            <Link
              onClick={() => {
                props.logout();
              }}
              to="/"
              id="logout"
            >
              <img
                src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/000000/external-logout-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
                alt="logout"
              />
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <form className="addData">
        <h3>Add Company Details</h3>
        <br />
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Company Name *"
          name="name"
          value={company.name}
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Company website *"
          name="website"
          value={company.website}
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Contact Number *"
          name="phone"
          value={company.phone}
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Company Address *"
          name="address"
          value={company.address}
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="City *"
          name="city"
          value={company.city}
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="State *"
          name="state"
          value={company.state}
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Country *"
          name="country"
          value={company.country}
          required
        />
        <br />
        <br />
        <select name="industry" onChange={handleChange} defaultValue={company.industry}>
          <option value="" disabled hidden>--department--</option>
          <option value="Accounts">Accounts</option>
          <option value="IT">IT</option>
          <option value="Sales">Sales</option>
          <option value="Health Care">Health Care</option>
        </select>
        <br />
        <br />
        <br />
        <button type="submit" onClick={handleSubmit} className="btnUpdt">
          Register
        </button>
        <br />
        <br />
      </form>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default AddCompany;
