export interface SECChair {
  id: string;
  name: {
    zh: string;
    en: string;
  };
  avatar: string;
  profitModifier: number; // 收益修正（百分比），如 -10 表示减少10%
  lossModifier: number; // 亏损修正（百分比），如 +10 表示增加10%
  description: {
    zh: string;
    en: string;
  };
}

export const secChairs: SECChair[] = [
  {
    id: 'caroline-crenshaw',
    name: {
      zh: 'Caroline Crenshaw',
      en: 'Caroline Crenshaw'
    },
    avatar: '/sec-caroline.jpg',
    profitModifier: -10, // 收益缩水10%
    lossModifier: 10, // 亏损增加10%
    description: {
      zh: '对加密货币持谨慎态度，加强监管',
      en: 'Cautious stance on crypto, enhanced regulation'
    }
  }
  // 更多主席会陆续添加
];

// 根据月份获取当前 SEC 主席
export const getCurrentSECChair = (month: number): SECChair => {
  const chairIndex = Math.floor((month - 1) / 12) % secChairs.length;
  return secChairs[chairIndex];
};
