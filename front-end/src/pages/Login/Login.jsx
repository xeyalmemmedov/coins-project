import { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/UserSlice/UserSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [formFields, setFormFields] = useState({
        username: '',
        password: ''
    });

    const signIn = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/admin/api/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(formFields)
            });

            const response = await res.json();
            dispatch(setUser(response.isAuth));

            if (response.isAuth) {
                navigate('/admin'); // React Router ile yönlendirme
            } else {
                alert('Username or password is incorrect!');
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('An error occurred, please try again later.');
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormFields((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form onSubmit={signIn} className="login-wrapper">
            <h1 className="admin-header">Admin Page</h1>
            <div className="login-input-wrapper">
                <label htmlFor="login">Login</label>
                <input
                    name="username"
                    className="login-input"
                    onChange={handleInput}
                    value={formFields.username}
                />
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    className="password-input"
                    onChange={handleInput}
                    type="password"
                    value={formFields.password}
                />
                <button className="sign-in-btn">Sign In</button>
            </div>
        </form>
    );
};

export default Login;
