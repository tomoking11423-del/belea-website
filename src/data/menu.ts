export interface MenuItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "new-customer",
    name: "新規",
    items: [
      {
        id: "counseling",
        name: "【初めての方でフェイスワックス不安な方へ】カウンセリングクーポン",
        price: 0,
      },
      {
        id: "rice-face-wax",
        name: "【全顔WAX】ライスフェイスワックス脱毛＋ヒト幹細胞フェイシャルパック",
        price: 6600,
      },
      {
        id: "super-food-wax",
        name: "【全顔WAX】スーパーフードフェイシャルワックス＋ヒト幹細胞パック",
        price: 7700,
      },
      {
        id: "shaving-graduation-2",
        name: "シェービング卒業！2回分【全顔】ライスフェイスワックス+ヒト幹細胞パック",
        price: 13200,
      },
      {
        id: "rice-unaji-set",
        name: "全顔ライスフェイスワックス＋うなじ襟足ワックス脱毛＋パック",
        price: 8800,
        originalPrice: 12100,
      },
      {
        id: "super-unaji-set",
        name: "全顔スーパーフードフェイシャルワックス+うなじ襟足+パック",
        price: 9900,
        originalPrice: 13200,
      },
      {
        id: "rice-stem-cell",
        name: "【全顔WAX】ライスフェイスワックス脱毛+ヒト幹細胞導入",
        price: 11000,
      },
      {
        id: "super-stem-cell",
        name: "【全顔WAX】スーパーフードフェイシャルワックス+ヒト幹細胞導入",
        price: 13200,
      },
      {
        id: "premium-set",
        name: "【プレミアム】全顔WAX+うなじ襟足+ヒト幹細胞導入+パック",
        price: 17600,
      },
      {
        id: "shaving-graduation-5",
        name: "シェービング卒業！5回分【全顔】ライスフェイスワックス+ヒト幹細胞パック",
        price: 27500,
        originalPrice: 33000,
      },
      {
        id: "shaving-graduation-10",
        name: "シェービング卒業！10回分【全顔】ライスフェイスワックス+ヒト幹細胞パック",
        price: 49500,
        originalPrice: 66000,
      },
      {
        id: "super-5-times",
        name: "【5回券】スーパーフードフェイシャルワックス+ヒト幹細胞パック",
        price: 33000,
        originalPrice: 38500,
      },
      {
        id: "super-10-times",
        name: "【10回券】スーパーフードフェイシャルワックス+ヒト幹細胞パック",
        price: 63700,
        originalPrice: 77000,
      },
      {
        id: "premium-5-times",
        name: "【5回券】プレミアム全顔WAX+うなじ襟足+導入+パック",
        price: 79200,
        originalPrice: 88000,
      },
      {
        id: "premium-10-times",
        name: "【10回券】プレミアム全顔WAX+うなじ襟足+導入+パック",
        price: 140800,
        originalPrice: 176000,
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
      },
      {
        id: "unaji-wax",
        name: "【両うなじ襟足】大人気♪うなじ襟足ワックス脱毛",
        price: 3300,
      },
      {
        id: "eyebrow-wax",
        name: "【眉WAX】眉ワックス脱毛",
        price: 3850,
      },
      {
        id: "nose-wax",
        name: "【鼻WAX】鼻ワックス",
        price: 1100,
      },
      {
        id: "lip-wax",
        name: "【口周りWAX】口周りワックス脱毛",
        price: 2200,
      },
      {
        id: "forehead-wax",
        name: "【額WAX】額ワックス脱毛",
        price: 2200,
      },
      {
        id: "cheek-wax",
        name: "【頬WAX】頬ワックス脱毛",
        price: 2200,
      },
      {
        id: "chin-wax",
        name: "【顎WAX】顎ワックス脱毛",
        price: 2200,
      },
      {
        id: "faceline-wax",
        name: "【フェイスラインWAX】フェイスラインワックス脱毛",
        price: 2200,
      },
      {
        id: "stem-cell-only",
        name: "【単品】ヒト幹細胞導入",
        price: 4400,
      },
      {
        id: "pack-only",
        name: "【単品】ヒト幹細胞フェイシャルパック",
        price: 2200,
      },
      {
        id: "unaji-repeat",
        name: "【リピーター様】うなじ襟足ワックス脱毛",
        price: 2750,
      },
    ],
  },
];

export const formatPrice = (price: number): string => {
  if (price === 0) return "¥0";
  return `¥${price.toLocaleString()}`;
};
