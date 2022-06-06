import { useState, useEffect } from 'react';

// input 만들어서 몇 달러 가졌는지 받고, 어떤 비트코인을 가질 수 있는지 만들어보기
function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [dollar, setDollar] = useState("");
    const [submit, setSubmit] = useState(false);

    const onChange = (event) => setDollar(event.target.value);
    const onSubmit = () => {
        setSubmit(true);
        console.log(dollar);
    };

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    }, [submit])
    return (
        <div>
            <h1>The coins!{loading ? "" : `(${coins.length})`}</h1>
            <form onSubmit={onSubmit}>
                <input value={dollar} onChange={onChange} type="number" placeholder="Dollars" />
                <button>Submit</button>
            </form>
            {loading ? <strong>Loading...</strong> : null}
            {/* <select>
                {coins.map((coin) => (
                    <option>
                        {{dollarcoin.quotes.USD.price}}
                    </option>
                ))}
            </select> */}
            
            {/* {loading ? <strong>Loading...</strong> : null}
            <select>
                {coins.map((coin) => (
                    <option>
                        {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                    </option>
                ))}
            </select> */}
        </div>
    );
}

export default Coin;