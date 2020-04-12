// StockPriceMAWrapper 企業ID・企業名・銘柄コードと共に、移動平均株価データを保持
export interface StockPriceMAWrapper {
  // APIサーバーがクライアントにリクエストを送信した日時
  timeStamp?: string;

  // システム内で設定する企業毎に一意となるコード
  companyID?: string;

  // 企業名
  companyName?: string;

  // 銘柄コード
  stockCode?: string;

  // 株価の時系列データ本体
  data?: StockPriceMA[];
}

// StockPriceMA 移動平均株価データ
export interface StockPriceMA {
  // 日付
  date?: string;

  // 移動平均株価の計算方法
  maType?: string;

  // 移動平均株価
  maValue?: number;
}
