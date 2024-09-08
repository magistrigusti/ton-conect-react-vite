import { useTonConnectModal, useTonWallet, useTonConnectUI } from "@tonconnect/ui-react"
import { SendTransactionRequest } from "@tonconnect/ui-react";
import { Cell } from '@ton/core';
import { waitForTransaction } from './tonapi.ts';

export const SendTx = () => {
  const wallet = useTonWallet();
  const { open } = useTonConnectModal();
  const [ tonConnectUI ] = useTonConnectUI();

  const onSendTx = async () => {
    const tx: SendTransactionRequest = {
      validUntil: Math.round(Date.now() / 1000) + 60 * 5,
      network: wallet?.account.chain,
      from: wallet!.account.address,
      messages: [
        {
          address: 'UQBH1A7LGcrv3_N61S3g_pnLY0bq5I6XUY18oh9wIpCfFq5o',
          amount: '10000000'
        }
      ]
    }

    const result = await tonConnectUI.sendTransaction(tx);
    const cell = Cell.fromBase64(result.boc);
    const event = await waitForTransaction(cell.hash().toString('hex'));
    console.log(event);
  }

  

  if (!wallet) {
    return <button onClick={ open }>Connect Wallet</button>
  }

  return (
    <>
      <button onClick={onSendTx}>Send transaction</button>
    </>
  )
}