import { useParams } from "react-router";
import exclusive_img from "../../assets/Exclusive_coin.png";
import "./ListOfCoins.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setHomeCoins } from "../../app/HomePageSlicer/HomePageSlice";
const ListOfCoins = () => {
    const coins = useSelector((state)=>state.homecoins.value)
    const id = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
            fetch(`http://localhost:3000/api/category/${id.id}`).then((res) => { return res.json() }).then((data) => dispatch(setHomeCoins(data)))
    },[]);
    console.log(coins)
    return (
        
            <div className="coinlist-coins-wrapper">
                {coins.map((coin)=>{
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
    )
}

export default ListOfCoins;