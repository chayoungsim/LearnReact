import { useState, useEffect} from 'react'

const Coin = () => {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        })

    },[])

  return (
    <div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        
        <div>
            {loading ? 
            ("Loading ...?") : 
            (
                <select className='coins'>
                    {coins.map((coin) => (
                        <option key={coin.id}>
                            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                        </option>
                    ))}
                </select>
            )}
        </div>
        
    </div>
  )
}

export default Coin