import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";

export default function ManualHeader() {
  const {
    enableWeb3,
    isWeb3Enabled,
    account,
    Moralis,
    deactivateWeb3,
    isWeb3EnableLoading,
  } = useMoralis();

  const onButtonClick = async () => {
    await enableWeb3();
    if (typeof window !== undefined) {
      window.localStorage.setItem("connected", "injected");
    }
  };

  useEffect(() => {
    if (isWeb3Enabled) return;
    if (typeof window !== undefined) {
      if (window.localStorage.getItem("connected")) {
        enableWeb3();
      }
    }
  }, [isWeb3Enabled]);

  useEffect(() => {
    Moralis.onAccountChanged(async (account) => {
      if (account == null && typeof window != null) {
        window.localStorage.removeItem("connected");
        await deactivateWeb3();
      }
    });
  }, []);

  return (
    <div>
      {account ? (
        <p>
          connected to {account.slice(0, 6)}....
          {account.slice(account.length - 4)}
        </p>
      ) : (
        <button disabled={isWeb3EnableLoading} onClick={onButtonClick}>
          connect
        </button>
      )}
    </div>
  );
}
