import { useTonConnectModal, useTonWallet } from "@tonconnect/ui-react"

export const SendTx = () => {
  const wallet = useTonWallet();
  const { open } = useTonConnectModal();

  if (!wallet) {
    return <button onClick={ open }>Connect Wallet</button>
  }

  return (
    <>
      <button>Send transaction</button>
    </>
  )
}