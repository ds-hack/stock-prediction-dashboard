export interface MAPlots {
    // 5日間(短期), 25日間(中期), 75日間(長期)の単純・指数・加重移動平均をオプションとする
    applySMA?: {key: string, title: string, checked: boolean}[];
    applyEMA?: {key: string, title: string, checked: boolean}[];
    applyWMA?: {key: string, title: string, checked: boolean}[];
}
