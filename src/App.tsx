import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { MainPage } from "./MainPage";

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
    >
      <MainPage />
    </TonConnectUIProvider>
  )
}

export default App;