// CompanyWrapper 企業の基本情報を持つCompanyクラスをリストで保持するWrapperクラス
export interface CompanyWrapper {
  // APIサーバーがクライアントにリクエストを送信した日時
  timeStamp?: string;

  // 企業名・銘柄コード・設立日などの会社の基本情報を保持するクラスの配列
  companies?: Company[];
}

// Company 企業名・銘柄コード・設立日などの会社の基本情報を保持する
export interface Company {
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
