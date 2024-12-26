
import dropdown_icon_down from "../../assets/dropdown_icon.svg";
import dropdown_icon_up from "../../assets/dropdown_icon_up.svg";
import { useEffect, useState } from "react";
import HomePageCoins from "../HomePageCoins/HomePageCoins";
import './HomePage.css';
import HomePageAdvanced from "../HomePageAdvanced/HomePageAdvanced";
import { useDispatch, useSelector } from "react-redux";
import { setHomeCoins } from "../../app/HomePageSlicer/HomePageSlice";
import '../ListOfCoins/ListOfCoins.css'
const HomePage = () => {
    const dispatch = useDispatch();
    const [toggleAdvanced, setToggleAdvanced] = useState(false);
    const homecoins = useSelector((state)=> state.homecoins.value)
    const [searchValue, setValue] = useState('');
    const [searchRes, setSearchRes] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/').then((res) => { return res.json() }).then((data) => dispatch(setHomeCoins(data)))
    },[]);
    const handleChange=(e)=>{
        const {name, value} = e.target
        setValue(value);
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        const filteredCoins = homecoins.filter(coin => 
            coin.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        dispatch(setHomeCoins(filteredCoins))
        
    }
    const handleAdvance = () => {setToggleAdvanced(!toggleAdvanced), isSearch=false}
    return (
        <div className="homepage-wrapper">
            <span>HomePage</span>
                    <form className="homepage-input-wrapper" onSubmit={handleSubmit}>
                        <label className="input-label" htmlFor="home-search">
                            Input field
                        </label>
                        <input
                            className="search-input"
                            name="home-search"
                            value={searchValue} 
                            onChange={(e) => handleChange(e)}
                        />
                        <button className="search-button" type="submit">
                            Search
                        </button>
                    </form>
                    <div className="advanced-wrapper">
                        <a
                            className="advanced"
                            onClick={() => {handleAdvance()}}
                            href="#"
                        >
                            <span>Advanced Filter</span>
                            {toggleAdvanced ? (
                                <img src={dropdown_icon_up} alt="Advanced filter up" />
                            ) : (
                                <img src={dropdown_icon_down} alt="Advanced filter down" />
                            )}
                        </a>
                    </div>

                    {toggleAdvanced ? <HomePageAdvanced /> : <HomePageCoins />}
        </div>
    );
}  

export default HomePage;

