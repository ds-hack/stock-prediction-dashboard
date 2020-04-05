// RawStockPriceWrapper 企業ID・企業名・銘柄コードと共に、株価の生時系列データを保持
export interface RawStockPriceWrapper {
  // APIサーバーがクライアントにリクエストを送信した日時
  timeStamp?: string;

  // システム内で設定する企業毎に一意となるコード
  companyID?: string;

  // 企業名
  companyName?: string;

  // 銘柄コード
  stockCode?: string;

  // 株価の時系列データ本体
  data?: RawStockPrice[];
}

// RawStockPrice 株価の生データ(open/high/low/close/volume)
export interface RawStockPrice {
  // 日付
  date?: string;

  // 株価(始値)
  open?: number;

  // 株価(高値)
  high?: number;

  // 株価(安値)
  low?: number;

  // 株価(終値)
  close?: number;

  // 出来高
  volume?: number;
}
