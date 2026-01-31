export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  duration?: string;
  isPopular?: boolean;
  condition?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "new-customer",
    name: "新規のお客様",
    items: [
      {
        id: "counseling",
        name: "【初めての方でフェイスワックス不安な方へ】カウンセリングクーポン",
        price: 0,
        condition: "新規",
      },
      {
        id: "rice-face-wax",
        name: "【全顔WAX】ライスフェイスワックス脱毛＋ヒト幹細胞フェイシャルパック",
        price: 6600,
        condition: "新規",
        isPopular: true,
      },
      {
        id: "super-food-wax",
        name: "【全顔WAX】スーパーフードフェイシャルワックス＋ヒト幹細胞パック",
        price: 7700,
        condition: "新規",
      },
      {
        id: "shaving-graduation",
        name: "シェービング卒業！2回分【全顔】ライスフェイスワックス+ヒト幹細胞パック",
        price: 13200,
        condition: "新規",
      },
      {
        id: "rice-unaji-set",
        name: "全顔ライスフェイスワックス＋うなじ襟足ワックス脱毛＋パック",
        price: 8800,
        originalPrice: 12100,
        condition: "新規",
      },
    ],
  },
  {
    id: "all-customer",
    name: "全員",
    items: [
      {
        id: "weekday-student",
        name: "【平日限定口コミ学割】ライスフェイスワックス脱毛+パック付き",
        price: 5500,
        originalPrice: 8800,
        condition: "学生のみ",
      },
      {
        id: "unaji-wax",
        name: "【両うなじ襟足】大人気♪うなじ襟足ワックス脱毛",
        price: 3300,
        isPopular: true,
      },
    ],
  },
];

export const formatPrice = (price: number): string => {
  if (price === 0) return "¥0";
  return `¥${price.toLocaleString()}`;
};
