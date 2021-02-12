export interface PegInTxState {
  utxoList?: Utxo[];
  addressList?: WalletAddress[];
  trezorConnected: boolean;
  peginConfiguration?: PeginConfiguration;
  sessionId: string;
}

export interface PeginConfiguration {
  minValue: number;
  maxValue: number;
  federationAddress: string;
  feePerKb: number;
  btcConfirmations: number;
}

export interface Utxo {
  txid: string;
  amount: number;
  address?: string;
  path: string;
  derivationArray: number[];
  vout: number;
}

export interface WalletAddress {
  address: string;
  serializedPath: string;
  path: number[];
}

export interface UnusedWalletAddress {
  address: string;
  path: number[];
  transfer: number;
}

export interface TransactionSummary {
  amount: number;
  destinationAddress: string;
  fee: number;
  totalAmount: number;
  refundAddress: string;
}
