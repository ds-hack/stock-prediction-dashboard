// CompanyDetail 特定の企業に関する詳細情報を保持する
export interface CompanyDetail {
  // APIサーバーがクライアントにリクエストを送信した日時
  timeStamp?: string;

  // システム内で設定する企業毎に一意となるコード
  companyID?: string;

  // 企業名
  companyName?: string;

  // 銘柄コード
  stockCode?: string;

  // 国コード
  countryCode?: string;

  // 上場市場
  listedMarket?: string;

  // 設立日(月)
  foundationDate?: string;

  // 本社所在地経度
  longitude?: number;

  // 本社所在地緯度
  latitude?: number;
}
