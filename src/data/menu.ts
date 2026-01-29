export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  duration?: string;
  isPopular?: boolean;
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
        id: "full-face",
        name: "フェイスワックス（全顔）",
        description: "額・眉周り・頬・鼻・鼻下・口周り・顎・フェイスライン",
        price: 7700,
        duration: "約60分",
        isPopular: true,
      },
      {
        id: "upper-face",
        name: "フェイスワックス（上顔）",
        description: "額・眉周り・頬",
        price: 4400,
        duration: "約30分",
      },
      {
        id: "lower-face",
        name: "フェイスワックス（下顔）",
        description: "鼻・鼻下・口周り・顎・フェイスライン",
        price: 4400,
        duration: "約30分",
      },
      {
        id: "eyebrow",
        name: "眉ワックス",
        description: "眉周りの産毛を整えます",
        price: 3300,
        duration: "約20分",
      },
      {
        id: "nose",
        name: "鼻ワックス",
        description: "鼻の産毛・角栓ケア",
        price: 1100,
        duration: "約10分",
      },
    ],
  },
];

export const formatPrice = (price: number): string => {
  return `¥${price.toLocaleString()}（税込）`;
};
