import "./App.css";
import TokenWidegt from "./components/tokenWidegt";

function App({ tokenName }) {
  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Widget Preview</h1>
      <TokenWidegt token={tokenName} />
    </>
  );
}

export default App;
