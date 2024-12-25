import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [formData, setFromData] = useState({
        username:'',
        password:''
    })
    const signIn = async (e) => {
        e.preventDefault();
        
        try {
            const res = await fetch('http://localhost:3000/admin/api/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });
    
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Login failed');
            }
    
            const data = await res.json();  
            console.log("Gelen yanıt:", data);  
    
        } catch (error) {
            console.error('Giriş sırasında bir hata oluştu:', error);
        }
    
        console.log("Gönderilen form verisi:", JSON.stringify(formData));
    };
    
    const handleInput=(e)=>{
        const {name, value} = e.target;
        setFromData((prev)=>(
            {...prev, 
                [name]:value
            }
        ))
            
    
    }
    return(
        <form onSubmit={(e)=>{signIn(e)}} className="login-wrapper">
            <h1 className="admin-header">Admin Page</h1>
            <div className="login-input-wrapper">
                <label htmlFor="login">Login</label>
                <input name="username" className="login-input" onChange={(e)=>{handleInput(e)}} />
                <label htmlFor="password">Password</label>
                <input name="password" className="password-input" onChange={(e)=>{handleInput(e)}}/>
                <button className="sign-in-btn">Sign In</button>
            </div>
            
        </form>
    )
}

export default Login;