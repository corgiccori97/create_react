import { useState, useEffect } from 'react';

// input 만들어서 몇 달러 가졌는지 받고, 어떤 비트코인을 가질 수 있는지 만들어보기
function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    }, [])
    return (
        <div>
            <h1>The coins!{loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> : null}
            <select>
                {coins.map((coin) => (
                    <option>
                        {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Coin;