
import dropdown_icon_down from "../../assets/dropdown_icon.svg";
import dropdown_icon_up from "../../assets/dropdown_icon_up.svg";
import { useEffect, useState } from "react";
import HomePageCoins from "../HomePageCoins/HomePageCoins";
import './HomePage.css';
import HomePageAdvanced from "../HomePageAdvanced/HomePageAdvanced";
import { useDispatch } from "react-redux";
import { setHomeCoins } from "../../app/HomePageSlicer/HomePageSlice";
import '../ListOfCoins/ListOfCoins.css'
const HomePage = () => {
    const dispatch = useDispatch();
    const [toggleAdvanced, setToggleAdvanced] = useState(false);
    let [isSearch, setSearch] = useState(false);
    const [searchValue, setValue] = useState('');
    const [searchRes, setSearchRes] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/').then((res) => { return res.json() }).then((data) => dispatch(setHomeCoins(data)))
    },[]);
    const handleChange=(e)=>{
        const {name, value} = e.target
        setValue(value);
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        setSearch(true);
        let res = fetch(`http://localhost:3000/api/search/${searchValue}`).then(res=>res.json()).then(res=>{return res.result});
        let response = await res;
        setSearchRes(response)
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
            {isSearch ? (
                <div className="coinlist-coins-wrapper">
                {searchRes.map((coin)=>{
                    return(
                        <a href={`/coin/${coin.coins_id}`}>
                        <div className="coinlist-coin">
                            <img src={coin.img_obverse} />
                            <div className="coinlist-coin-description-wrapper">
                                <p className="coinlist-desc-header">
                                    {coin.name}
                                </p>
                                <p className="coinlist-short-description">
                                    {coin.short_description}
                                </p>
                            </div>
                        </div></a>
                    )
                    

                })}
                
            </div>
            ) : (
                <>
                    
                    {toggleAdvanced ? <HomePageAdvanced /> : <HomePageCoins />}
                </>
            )}
        </div>
    );
}  

export default HomePage;