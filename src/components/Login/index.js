import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import './index.css'
import { auth } from '../../firebase'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

const Login=()=>{
    const [phone,setPhone]=useState("")
    const [user,setUser]=useState(null)
    const [otp,setOtp]=useState("")
    const [error,setError]=useState("")
    const [redirection,setRedirection]=useState(false)
    const sendOtp=async()=>{
        try{
            const recaptcha=new RecaptchaVerifier(auth,"recaptcha",{})
            const confirmation=await signInWithPhoneNumber(auth,phone,recaptcha)
            setUser(confirmation)
        }
        catch(err){
            setError(err.message)
        }
    }

    const confirmOtp=async()=>{
        try{
            await user.confirm(otp)
            setRedirection(true)
            Cookies.set("loginStatus",user.verificationId,{expires:30})
        }
        catch(err){
            setError(err.message)
        }
    }

    if (redirection){
        return <Redirect to="/"/>
    }
    const loginVal=Cookies.get("loginStatus")
    if (loginVal!==undefined){
        return <Redirect to="/"/>
    }

    return(
        <div className='login-container'>
            <img width="130" height="130" src="https://img.icons8.com/color/144/whatsapp--v1.png" alt="whatsapp--v1"/>
            <h1>Welcome to Whatsapp</h1>
            <div className='phone-number-container'>
                <PhoneInput country={"in"} value={phone} onChange={(phone)=>setPhone("+"+phone)} />  
            </div>          
            <button type='button' className='otp-button' onClick={sendOtp}>Get OTP</button>
            <div id='recaptcha'></div>
            <input type='text'onChange={(e)=>setOtp(e.target.value)}  placeholder='Enter OTP' className='otp-number-input' required/>
            <button type='button' onClick={confirmOtp} className='verify-button'>Verify OTP</button>
            {error&&<p className='error-msg'>{error}</p>}
        </div>
        )  
}
     


export default Login