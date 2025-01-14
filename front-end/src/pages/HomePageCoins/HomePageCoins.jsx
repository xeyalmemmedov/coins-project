import { useParams } from "react-router"
import Chevron_right from "../../assets/Chevron_right.svg"
import "./HomePageCoins.css"
import { useSelector } from "react-redux"
import { useState } from "react"

const HomePageCoins = () => {
    const id = useParams()
    const coins = useSelector((state) => state.homecoins.value)
    const [data, setData] = useState(coins)

    return (
        <div className="coins-wrapper">
            {coins.map((coin) => {
                return (<div key={coin.category_id} className="coin">
                    <h5 className="coin-header">{coin.name}</h5>
                    <a href={`/category/${coin.category_id}`} className="show-all"><span>Show all</span><img src={Chevron_right} /></a>
                    <img className="coin-image" src={coin.img_category} />
                </div>)
            })}
        </div>
    )
}

export default HomePageCoins;

