import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // react-router-dom kullanarak yönlendirme yapacağız
import "./AdminPage.css";
import exclusive_img from "../../assets/Exclusive_coin.png";

const AdminPage = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // react-router-dom kullanarak yönlendirme

    useEffect(() => {
        // Admin kontrolü yapalım
        fetch('http://localhost:3000/admin/api/dashboard', {
            method: 'GET',
            credentials: 'same-origin', // Session bilgilerini göndermek için
        })
        .then(res => {
            if (!res.ok) {
                // Eğer admin değilse, 401 hata kodu dönecek ve burada yönlendirme yapılacak
                throw new Error("Unauthorized"); // Eğer admin değilse, hata fırlatıyoruz
            }
            return res.json(); // Veriyi al
        })
        .then(data => {
            setCoins(data);  // Veriyi UI'de göster
            setLoading(false); // Yükleme durumunu sonlandır
        })
        .catch(err => {
            // Admin değilse veya başka bir hata varsa yönlendirme yap
            setError(err.message); // Hata mesajını kaydet
            setLoading(false); // Yükleme durumu sonlandır
            // Hata durumunda login sayfasına yönlendir
            navigate('/login'); // React Router kullanarak yönlendirme
        });
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>; // Hata mesajını göster
    }

    return (
        <div className="adminpage-wrapper">
            <span className="admin-panel-header">Admin Panel</span>
            <div className="adminpage-input-wrapper">
                <label className="admin-input-label" htmlFor="admin-search">Input field</label>
                <div className="admin-search-wrapper">
                    <input className="admin-search-input" name="admin-search" />
                    <button className="admin-search-button">Search</button>
                </div>
            </div>

            <div className="admin-coins-wrapper">
                {coins.length > 0 ? (
                    coins.map((coin, index) => (
                        <div className="admin-coin" key={coin.id || index}>
                            <img className="admin-coin-img" src={exclusive_img} alt={coin.name} />
                            <div className="admin-coin-description">
                                <p className="admin-coin-header">{coin.name}</p>
                                <p className="admin-coin-short-desc">{coin.description}</p>
                            </div>
                            <div className="admin-btn-wrapper">
                                <button className="admin-delete-btn">Delete</button>
                                <button className="admin-edit-btn">Edit</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No coins available</div>
                )}

                <div className="admin-add-coin-wrapper">
                    <a href="#" className="admin-add-coin-anchor">
                        <div className="admin-add-coin-circle">+</div>
                        <p className="admin-add-coin-text">Add a new coin</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
