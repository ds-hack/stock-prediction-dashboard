export interface MAPlots {
    // 5日間(短期), 25日間(中期), 75日間(長期)の単純・指数・加重移動平均をオプションとする
    applySMA?: {title: string, checked: boolean}[];
    applyEMA?: {title: string, checked: boolean}[];
    applyWMA?: {title: string, checked: boolean}[];
}
