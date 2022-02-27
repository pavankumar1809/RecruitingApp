import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function ViewInfo(props) {
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

  const {id} = useParams() 

  const [api,setApi] = useState(true)
  useEffect(()=>{
    if(api){
      axios.get(`/Companies/${id}`).then((res)=>{
        setCompany(res.data)
        setApi(false)
      })
    }})

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
            Company Details
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
      <div className="userInfo">
        <h3>{company.name}`s Profile</h3><br/>
        <table className="userInfo" style={{width:"400px",height:"500px", background:"#FEECE9"}}>
        <tbody>
        
        <tr>
        <th className="left" >Company Name</th><th>:</th><td className="right">{company.name}</td>
        </tr>
        <tr >
        <th className="left" >website</th><th>:</th><td className="right"><a href={"https://www."+company.website} target="_blank" rel="noreferrer">{company.website}</a></td>
        </tr>
        <tr>
        <th className="left">Contact Number</th><th>:</th><td className="right">{company.phone}</td>
        </tr>
        <tr>
        <th className="left">Address</th><th>:</th><td className="right">{company.address}</td>
        </tr>
        <tr >
        <th className="left" >City</th><th>:</th><td className="right">{company.city}</td>
        </tr>
        <tr >
        <th className="left" >State</th><th>:</th><td className="right">{company.state}</td>
        </tr>
        <tr >
        <th className="left" >Country</th><th>:</th><td className="right">{company.country}</td>
        </tr>
        <tr >
        <th className="left" >Industry</th><th>:</th><td className="right">{company.industry}</td>
        </tr>
        </tbody>
        </table><br/>
      </div>
      <br/><br/><br/>
    </div>
  )
}

export default ViewInfo;