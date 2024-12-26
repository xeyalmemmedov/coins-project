import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Changed from useNavigate to Link
import "./AdminPage.css";
import exclusive_img from "../../assets/Exclusive_coin.png";

const AdminPage = () => {
    const [coins, setCoins] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchCoins();
    }, []);

    const fetchCoins = () => {
        fetch('http://localhost:3000/admin/api/dashboard')
            .then(res => res.json())
            .then(data => setCoins(data));
    };

    const deleteCoin = (coin) => {
        const id = coin.coins_id;
        fetch(`http://localhost:3000/admin/api/delete/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(() => fetchCoins());
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        console.log("Search button clicked. Current search term:", searchTerm);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.short_description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="adminpage-wrapper">
            <span className="admin-panel-header">Admin Panel</span>
            <div className="adminpage-input-wrapper">
                <label className="admin-input-label" htmlFor="admin-search">Search coins</label>
                <div className="admin-search-wrapper">
                    <input 
                        className="admin-search-input" 
                        name="admin-search" 
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search by name or description"
                    />
                    <button className="admin-search-button" onClick={handleSearchClick}>Search</button>
                    <button onClick={()=>{localStorage.removeItem('isAuth')}}><a href="/login">Logout</a></button>

                    
                </div>
            </div>

            <div className="admin-coins-wrapper">
                {filteredCoins.length > 0 ? (
                    filteredCoins.map((coin, index) => (
                        <a href={`/coin/${coin.coins_id}`}>
                            <div className="admin-coin" key={coin.id || index}>
                                <img className="admin-coin-img" src={exclusive_img} alt={coin.name} />
                                <div className="admin-coin-description">
                                    <p className="admin-coin-header">{coin.name}</p>
                                    <p className="admin-coin-short-desc">{coin.short_description}</p>
                                </div>
                                <div className="admin-btn-wrapper">
                                    <button className="admin-delete-btn" onClick={() => deleteCoin(coin)}>Delete</button>
                                    <a href={`/edit-coin/${coin.coins_id}`}><button className="admin-edit-btn" >Edit</button></a>
                                </div>
                            </div>
                        </a>
                    ))
                ) : (
                    <div>No coins available</div>
                )}

                <div className="admin-add-coin-wrapper">
                    <Link to="/add-coin" className="admin-add-coin-anchor">
                        <div className="admin-add-coin-circle">+</div>
                        <p className="admin-add-coin-text">Add a new coin</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;

