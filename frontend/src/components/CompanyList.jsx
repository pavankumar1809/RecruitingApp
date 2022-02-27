import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function CompanyList(props) {
  const [companies, setCompanies] = useState([]);
  const history = useHistory();

  axios.defaults.baseURL = "http://localhost:8080/api/v1";

  const getData = () => {
    axios.get("/Companies").then((res) => {
      setCompanies(res.data);
    });
  };

  function rows(){
    return <table cellSpacing={20}>
    <thead>
      <tr>
        <th>Company Id</th>
        <th>Company Name</th>
        <th>Country</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {companies.map((Company) => (
      
        <tr key={Company.id}>
          <td>{Company.id}</td>
          <td>
            {Company.name}
          </td>
          <td>{Company.country}</td>
          <td>
            <button
              onClick={() => {
                history.push(`/view-info/${Company.id}`);
              }}
              className="btnInfo"
              id={"info" + Company.id}
            >
              More Info
            </button>

            <button
              onClick={() => {
                history.push(`/update-company/${Company.id}`);
              }}
              id={"updt" + Company.id}
              className="btnUpdt"
            >
              Update
            </button>
            <button
              className="btnDel"
              id={"del" + Company.id}
              onClick={() => {
                axios
                  .delete(`/Companies/${Company.id}`)
                  .then((res) => {
                    console.log(res.data);
                    setApi(true);
                  });
                  
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  }

  const [api, setApi] = useState(true);

  useEffect(() => {
    if (api) {
      getData();
      setApi(false);
    }
  }, [api,history]);

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
            Companies List(<span>{companies.length}</span>)
          </h2>

          <li>
                <Link
                  onClick={() => {
                    props.logout();
                  }}
                  to="/"
                  id="logout"
                >
                  <img src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/000000/external-logout-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png" alt="logout"/>
                </Link>
          </li>
        </ul>
      </div>
      <br />
      <div align="center" className="list">
        <br />
        <button
          onClick={() => {
            history.push("/add-company");
          }}
          className="add"
        >
          {" "}
          <img
            src="https://img.icons8.com/fluency/48/000000/new-company.png"
            alt="Add Company"
            id="add"
          />{" "}
        </button>
        <br />
        <br />
          {rows()}
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
    </div>
  );
}

export default CompanyList;
