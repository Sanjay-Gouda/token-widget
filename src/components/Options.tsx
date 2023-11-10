import "./style.css";

type TOptions = {
  handleTokenName: (token: string) => void;
};

function Options({ handleTokenName }: TOptions) {
  const handleChange = (e: any) => {
    handleTokenName(e.target.value);
  };

  return (
    <fieldset>
      <legend>Choose a Token</legend>
      <div className="radio-item-container">
        <div className="radio-item">
          <label htmlFor="bitcoin">
            <input
              type="radio"
              id="bitcoin"
              name="token"
              value="bitcoin"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span>Bitcoin</span>
          </label>
        </div>

        <div className="radio-item">
          <label htmlFor="ethereum">
            <input
              type="radio"
              id="ethereum"
              name="token"
              value="ethereum"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span>Ethereum</span>
          </label>
        </div>

        <div className="radio-item">
          <label htmlFor="tether">
            <input
              type="radio"
              id="tether"
              name="token"
              value="tether"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span>Tether</span>
          </label>
        </div>

        <div className="radio-item">
          <label htmlFor="usd-coin">
            <input
              type="radio"
              id="usd-coin"
              name="token"
              value="usd-coin"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span>USD-Coin</span>
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default Options;
