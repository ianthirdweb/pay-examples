import "./App.css";
import { ConnectButton, PayEmbed } from "thirdweb/react";
import { PayTransactionButton } from "./components/transaction-button";
import { THIRDWEB_CLIENT } from "./lib/client";

function App() {
  return (
    <div className="container relative">
      <div className="container flex-1">
        <ConnectButton client={THIRDWEB_CLIENT} />
        <div className="mtb">
          <h2>Pay Embed</h2>
          <PayEmbed
            client={THIRDWEB_CLIENT}
            payOptions={{ buyWithFiat: { testMode: true } }}
          />
        </div>
        <div className="transaction-button-container">
          <h2>Transaction Flow</h2>
          <PayTransactionButton />
        </div>
      </div>
      <div className="gradient" />
    </div>
  );
}

export default App;
