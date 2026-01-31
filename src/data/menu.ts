export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration?: string;
  isPopular?: boolean;
  isReturning?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "face-wax",
    name: "フェイスワックス",
    items: [
      {
        id: "rice-face-wax",
        name: "【全顔WAX】ライスフェイスワックス施毛+幹細胞フェイシャルパック",
        description: "全顔の産毛除去+幹細胞パックで美肌へ",
        price: 7700,
        duration: "約60分",
        isPopular: true,
      },
      {
        id: "super-face-wax",
        name: "【全顔WAX】スーパーフェイシャルワックス+幹細胞パック",
        description: "より徹底的な施術で極上の仕上がり",
        price: 13200,
        duration: "約90分",
      },
      {
        id: "urui-wax",
        name: "【黄うるい輝き】うるい輝きワックス",
        description: "肌に輝きを与える人気メニュー",
        price: 3300,
        duration: "約30分",
      },
      {
        id: "super-urui-set",
        name: "スーパーフェイシャルワックス+うるい輝きセット",
        description: "スーパーフェイシャルとうるい輝きの贅沢セット",
        price: 15400,
        duration: "約120分",
      },
      {
        id: "rice-urui-set",
        name: "ライスフェイスワックス+うるい輝きセット",
        description: "ライスフェイスワックスとうるい輝きのお得なセット",
        price: 8800,
        originalPrice: 12100,
        duration: "約90分",
      },
    ],
  },
  {
    id: "returning",
    name: "2回目以降のお客様",
    items: [
      {
        id: "rice-returning",
        name: "【2回目】ライスフェイスワックス+幹細胞パック",
        description: "リピーター様向けお得プラン",
        price: 5400,
        duration: "約60分",
        isReturning: true,
      },
      {
        id: "super-returning",
        name: "【2回目】スーパーフェイシャルワックス+幹細胞パック",
        description: "リピーター様向けプレミアムプラン",
        price: 9900,
        duration: "約90分",
        isReturning: true,
      },
    ],
  },
];

export const formatPrice = (price: number): string => {
  return `¥${price.toLocaleString()}（税込）`;
};
