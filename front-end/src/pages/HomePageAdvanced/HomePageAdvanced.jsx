import { useState } from "react";
import "./HomePageAdvanced.css";

const HomePageAdvanced = () => {
    const [filtered, setFiltered] = useState({
        country: "",   
        metal: "",     
        quality: "",   
        priceFrom: "", 
        priceTo: "",   
        yearFrom: "",  
        yearTo: "",    
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiltered((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/filtered', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filtered)
        });
        const data = await response.json()
        console.log('data:', data.result)
    };

    return (
        <div className="homepage-advanced-wrapper">
            <div className="option-part">
                <label htmlFor="country-select">Issuing country</label>
                <select
                    name="country"
                    value={filtered.country}
                    onChange={handleChange}
                >
                    <option value="">Select Country</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>

                <label htmlFor="metal-select">Metal</label>
                <select
                    name="metal"
                    value={filtered.metal}
                    onChange={handleChange}
                >
                    <option value="">Select Metal</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>

                <label htmlFor="quality-select">Quality of the coin</label>
                <select
                    name="quality"
                    value={filtered.quality}
                    onChange={handleChange}
                >
                    <option value="">Select Quality</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>

            <div className="price-issue-details">
                <div className="price-wrapper">
                    <p>Price</p>
                    <label>
                        From
                        <input
                            type="number"
                            name="priceFrom"
                            value={filtered.priceFrom}
                            onChange={handleChange}
                            className="from-input"
                        />
                    </label>
                    <label>
                        To
                        <input
                            type="number"
                            name="priceTo"
                            value={filtered.priceTo}
                            onChange={handleChange}
                            className="to-input"
                        />
                    </label>
                </div>

                <div className="issue-wrapper">
                    <p>Year of issue</p>
                    <label>
                        From
                        <input
                            type="number"
                            name="yearFrom"
                            value={filtered.yearFrom}
                            onChange={handleChange}
                            className="from-input"
                        />
                    </label>
                    <label>
                        To
                        <input
                            type="number"
                            name="yearTo"
                            value={filtered.yearTo}
                            onChange={handleChange}
                            className="to-input"
                        />
                    </label>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default HomePageAdvanced;
