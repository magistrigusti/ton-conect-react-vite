import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";

const Header = () => {
  const wallet = useTonWallet();
  
  return (
   <div>
    <div>Fuck You World</div>
    <TonConnectButton style={{marginLeft: "auto"}} />
    <div>
      {
        wallet && 'name' in wallet ? <>
          <div>{wallet.name}</div> 
          <div>{wallet.account.address}</div>
          <img src={wallet.imageUrl} height="40px" width="40px" />
        </> : 'Unknow wallet'
      }
    </div>
   </div> 
  )
};

export default Header;