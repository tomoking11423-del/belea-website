export interface MenuItem {
  id: string;
  name: string;
  description?: string;
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
    name: "新規（初回限定）",
    items: [
      {
        id: "counseling",
        name: "【初めての方でフェイスワックス不安な方へ】カウンセリング",
        description: "フェイスワックスが初めてで不安な方向けの無料相談。施術内容や流れを丁寧にご説明いたします。",
        price: 0,
      },
      {
        id: "rice-face-wax",
        name: "【全顔WAX】ライスフェイスワックス脱毛＋ヒト幹細胞フェイシャルパック",
        description: "お米の成分で肌に優しく産毛を除去。ヒト幹細胞パックで潤いと透明感をプラス。",
        price: 6600,
        originalPrice: 8800,
      },
      {
        id: "super-food-wax",
        name: "【全顔WAX】スーパーフードフェイスワックス＋ヒト幹細胞パック",
        description: "5つの美容成分（アサイー・カカオ・ココナッツ等）配合のワックスで、脱毛しながらエイジングケア。",
        price: 7700,
        originalPrice: 9900,
      },
      {
        id: "shaving-graduation-rice-2",
        name: "シェービング卒業！2回分【全顔】ライスフェイスワックス＋ヒト幹細胞パック",
        description: "シェービングからワックス脱毛へ切り替えたい方におすすめの2回セット。",
        price: 13200,
        originalPrice: 17600,
      },
      {
        id: "shaving-graduation-super-2",
        name: "シェービング卒業！2回分【全顔】スーパーフードフェイスワックス＋ヒト幹細胞パック",
        description: "スーパーフードワックスで贅沢にシェービング卒業。2回分のお得なセット。",
        price: 15400,
        originalPrice: 18800,
      },
      {
        id: "rice-unaji-set",
        name: "【お顔セット】全顔ライスフェイスワックス＋うなじ襟足＋パック",
        description: "全顔とうなじ襟足をまとめてケア。首元まで美しく整えます。",
        price: 8800,
        originalPrice: 12100,
      },
      {
        id: "super-unaji-set",
        name: "【お顔セット】全顔スーパーフードフェイスワックス＋うなじ襟足＋パック",
        description: "スーパーフードワックスで全顔とうなじ襟足をトータルケア。",
        price: 9900,
        originalPrice: 13200,
      },
    ],
  },
  {
    id: "all-customer",
    name: "全員（再来・回数券）",
    items: [
      {
        id: "rice-repeat",
        name: "【全顔WAX】ライスフェイスワックス＋ヒト幹細胞パック",
        description: "お米の成分で肌に優しく産毛を除去。リピーター様向けの通常メニュー。",
        price: 8800,
      },
      {
        id: "super-repeat",
        name: "【全顔WAX】スーパーフードフェイスワックス＋ヒト幹細胞パック",
        description: "5つの美容成分配合のワックスで、脱毛しながらエイジングケア。",
        price: 9900,
      },
      {
        id: "rice-unaji-repeat",
        name: "【全顔WAX】ライスフェイスワックス＋うなじ襟足＋パック",
        description: "全顔とうなじ襟足をまとめてケアするお得なセットメニュー。",
        price: 11000,
        originalPrice: 12100,
      },
      {
        id: "super-3-ticket",
        name: "【3回券】スーパーフードフェイスワックス＋パック",
        description: "スーパーフードワックス3回分のお得な回数券。継続ケアにおすすめ。",
        price: 26730,
        originalPrice: 29700,
      },
      {
        id: "rice-6-ticket",
        name: "【6回券】ライスフェイスワックス＋パック",
        description: "ライスワックス6回分の回数券。約3ヶ月〜半年分のケアに。",
        price: 44880,
        originalPrice: 52800,
      },
      {
        id: "super-6-ticket",
        name: "【6回券】スーパーフードフェイスワックス＋パック",
        description: "スーパーフードワックス6回分の回数券。エイジングケアを継続したい方に。",
        price: 50490,
        originalPrice: 59400,
      },
      {
        id: "rice-10-ticket",
        name: "【10回券】ライスフェイスワックス＋パック",
        description: "ライスワックス10回分の最もお得な回数券。長期継続ケアに最適。",
        price: 70400,
        originalPrice: 88000,
      },
      {
        id: "super-10-ticket",
        name: "【10回券】スーパーフードフェイスワックス＋パック",
        description: "スーパーフードワックス10回分の最もお得な回数券。本格エイジングケアに。",
        price: 79200,
        originalPrice: 99000,
      },
    ],
  },
  {
    id: "options",
    name: "オプション",
    items: [
      {
        id: "option-1100",
        name: "指毛 / 鼻毛 / フェイスライン下 / クイック眉毛下",
        description: "各部位1箇所あたりの料金です。",
        price: 1100,
      },
      {
        id: "option-2200",
        name: "手の甲 / 耳毛",
        description: "各部位1箇所あたりの料金です。",
        price: 2200,
      },
      {
        id: "option-3300",
        name: "襟足うなじ",
        description: "襟足・うなじ周りのワックス脱毛。",
        price: 3300,
      },
    ],
  },
];

export const formatPrice = (price: number): string => {
  if (price === 0) return "¥0（税込）";
  return `¥${price.toLocaleString()}（税込）`;
};
