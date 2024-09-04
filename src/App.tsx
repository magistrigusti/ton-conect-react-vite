import { TonConnectUIProvider } from "@tonconnect/ui-react"
import MainPage from './MainPage';

function App() {


  return <TonConnectUIProvider
  manifestUrl = "https://ton-connect.github.io/demo-dapp-with-wallet/"
  >
   
    <MainPage />
  </TonConnectUIProvider>
}

export default App
