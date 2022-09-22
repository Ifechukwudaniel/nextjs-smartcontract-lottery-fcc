import React from 'react'
import {ConnectButton} from "web3uikit"

export default function Header() {
  return (
    <div>
        <h1>Decentralized Raffle</h1>
        <ConnectButton moralisAuth={false}/>
    </div>
  )
}
