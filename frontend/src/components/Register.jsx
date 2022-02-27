import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Register() {
    const [data,setData] = useState([])
    const [user,setUser] = useState({
        name:"",
        username:"",
        password:"",
    })

    axios.defaults.baseURL = "http://localhost:8080/api/v1";

    const history = useHistory()
    function getData(){
        axios.get("/Users").then(res => {
            setData(res.data)
        })
    }

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
      
    function handleChange(e){
        const { name, value } = e.target;
    
        setUser(prevUser => {
          return {
            ...prevUser,
            [name]: value
          };
        });
    }

    function didRegister(e){
        console.log(data)
        if(user.name !== "" && user.username !== "" && user.password !== ""){
        const temp = data.filter((item)=>{
            return item.username === user.username;
        })
        if(temp.length===0){

            axios.post("/Users",user).then(res=>{
                console.log(res.data);
            })
            setUser({
                name : '',
                username : '',
                password : '',
            }
            )
            tempAlert("Regitered Successfully... You will be redirected to Login... press OK to continue....!",2000,true)
            history.push('/')
        }
        else{
            setUser({
                name : '',
                username : '',
                password : '',
            })
            tempAlert("username already exists",2000,false)
        }
        }
        else
        {
            tempAlert("please fill all the required details",2000,false)
        }
        e.preventDefault()
    }

    useEffect(() => {
        let api = true;
        if(api){
        getData();
        }
        return ()=>{
            api=false
        }
      });

    return (
        <div><br/><br/><br/>
            <form className='addData'>
            <h3>Register</h3><br/><br/>
            <input onChange={handleChange} type='text' placeholder='Enter Full Name *' name='name' value={user.name} required/><br/><br/>
            <input onChange={handleChange} type='text' placeholder='Enter User Name *' name='username' value={user.username} required/><br/><br/>
            <input onChange={handleChange} type='password' placeholder='Password *' name='password' value={user.password} required/><br/><br/>
            <button type='submit' onClick={didRegister} className='btnUpdt'>Register</button><br/><br/>
            <Link to='/login'>Already have an Account?</Link>
        </form><br/><br/><br/><br/>
        </div>
    )
}

export default Register