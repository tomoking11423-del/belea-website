export interface Store {
  id: string;
  name: string;
  slug: string;
  address: string;
  postalCode: string;
  tel: string;
  hours: string;
  holidays: string;
  mapEmbedUrl: string;
  hotpepperUrl: string;
  lineUrl: string;
  representative?: string;
  images: {
    exterior?: string;
    interior?: string;
    treatment?: string;
  };
}

export const stores: Store[] = [
  {
    id: "honten",
    name: "BELEA",
    slug: "honten",
    address: "お問い合わせください",
    postalCode: "---",
    tel: "---",
    hours: "10:00〜20:00",
    holidays: "不定休",
    mapEmbedUrl: "",
    hotpepperUrl: "https://beauty.hotpepper.jp/kr/slnH000711699/?cstt=1",
    lineUrl: "https://lin.ee/DXNpijD",
    representative: "",
    images: {
      interior: "/images/stores/honten/interior.jpg",
      treatment: "/images/gallery/treatment.jpg",
    },
  },
];

export const getStoreById = (id: string): Store | undefined => {
  return stores.find((store) => store.id === id);
};

export const getStoreBySlug = (slug: string): Store | undefined => {
  return stores.find((store) => store.slug === slug);
};
