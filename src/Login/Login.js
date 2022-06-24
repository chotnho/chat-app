import React, { useRef } from 'react'
import {useNavigate} from "react-router-dom"
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { auth, db } from '../Firebase';
import { addDoc, collection } from 'firebase/firestore';

export default  function Login ({setUser})  {

  let navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const register = async() =>{
    const myEmail =email.current.value;
    const myPassword = password.current.value;
    
    try{
      const responseFromAuth = await createUserWithEmailAndPassword(
        auth,
        myEmail,
        myPassword
      );
      const userId = responseFromAuth.user.uid;
        // Lưu dữ liệu vào firebase
        await addDoc(collection(db, "users"), {
          email: myEmail,
          uid: userId,
        });
        // lưu dữ liệu vào locapstoregate
        localStorage.setItem("user", JSON.stringify({
          email: myEmail,
          uid: userId,
        })
        );
        // set user as active app
        setUser({
          email: myEmail,
          uid: userId,
        });
        navigate('/chat')

    }catch(error){
      console.log(error);
    }
  };

  const login = async() =>{
    const myEmail =email.current.value;
    const myPassword = password.current.value;

    try {
      const responseFromAuth = await signInWithEmailAndPassword(
        auth,
        myEmail,
        myPassword
      );

      const userId = responseFromAuth.user.uid;

      // save user to localstorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: myEmail,
          uid: userId,
        })
      );

      // set user as active in app
      setUser({
        email: myEmail,
        uid: userId,
      });

      navigate("/chat");
    } catch (error) {
      alert(error);
    }
      
    
  };

  React.useEffect (() =>{
    // get user from localstorage
    const user = JSON.parse(localStorage.getItem("user"));

    if(user){
      setUser(user)
      navigate("/chat");
    }
  }, [navigate, setUser]);


  return (
    <div id='login-page'>
        <div id='login-card'>
            <h2> Wellcom to Thiên Di chats</h2>
            <div className="login-screen-container">
                 <div>
                    <input placeholder="your.email@example.com" ref={email} />
                </div>
                <div>
                    <input className='login-pas' type="password" placeholder="Strong passowrd"  ref={password}/>
                </div>       
            </div>
         
            <div className="container-fluid">
            <Button variant="primary" onClick={login}>Login</Button>{' '}
            <Button variant="primary" onClick={register}>Register</Button>{' '}
            </div>

        </div>     
    </div>
  )
}

