import { useState, useEffect } from "react";
import Options from "./Options";

type Tprops = {
  token: string;
};

const TokenWidegt = ({ token }: Tprops) => {
  console.log(token);

  const [widgetTokenName, setTokenName] = useState(token);

  const [tokenPayload, setTokenPayload] = useState(token);

  useEffect(() => {
    setTokenPayload(widgetTokenName);
  }, [widgetTokenName]);
  const [tokenDetails, setTokenDetail] = useState({
    tokenName: "",
    marketCap: "",
    currentPrice: "",
    volume: "",
    rank: "",
    score: "",
    logo: "",
    watchListUsers: "",
    symbol: "",
  });

  const fetchData = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${tokenPayload}`
    );
    const tokenDetail = await res.json();
    setTokenDetail({
      currentPrice: tokenDetail.coingecko_rank,
      marketCap: tokenDetail.market_cap_rank,
      tokenName: tokenDetail.name,
      volume: tokenDetail.developer_score,
      rank: tokenDetail.coingecko_rank,
      score: tokenDetail.coingecko_score,
      logo: tokenDetail.image.small,
      symbol: tokenDetail.symbol,
      watchListUsers: tokenDetail.watchlist_portfolio_users,
    });
    console.log(tokenDetail);
  };

  useEffect(() => {
    fetchData();
  }, [tokenPayload]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          width: "1280px",
        }}
      >
        <Options handleTokenName={setTokenName} />

        <div className="widget-preview">
          <div className="flex-row">
            <h1>{tokenDetails.tokenName}</h1>
            <div className="image-wrapper">
              <img src={tokenDetails.logo} alt="logo" />
            </div>
          </div>

          <div className="flex-row">
            <p className="list-heading">Rank</p>
            <p className="lg-text">{tokenDetails.rank}</p>
          </div>
          <div className="flex-row">
            <p className="list-heading">Score</p>
            <p className="lg-text">{tokenDetails.score}</p>
          </div>
          <div className="flex-row">
            <p className="list-heading">Market Cap</p>
            <p className="lg-text">
              {tokenDetails.marketCap}
              <span
                style={{
                  textTransform: "uppercase",
                  marginLeft: "4px",
                  fontSize: "14px",
                }}
              >
                {tokenDetails.symbol}
              </span>
            </p>
          </div>
          <div className="flex-row">
            <p className="list-heading">Current price</p>
            <p className="lg-text">{tokenDetails.marketCap}</p>
          </div>
          <div className="flex-row">
            <p className="list-heading">24-hour Trading volume</p>
            <p className="lg-text">{tokenDetails.marketCap}</p>
          </div>
          <div className="last-child">
            <p className="list-heading">Watchlist Users</p>
            <p className="lg-text">{tokenDetails.watchListUsers}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenWidegt;
