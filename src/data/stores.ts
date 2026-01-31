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
    address: "新宿区西新宿7-6-5 グローリア初穂生沼801",
    postalCode: "160-0023",
    tel: "---",
    hours: "平日 11:00〜20:00 / 土日祝 10:00〜19:00",
    holidays: "不定休",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3!2d139.6965!3d35.6945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzQwLjIiTiAxMznCsDQxJzQ3LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890",
    hotpepperUrl: "https://beauty.hotpepper.jp/kr/slnH000711699/?cstt=1",
    lineUrl: "https://lin.ee/DXNpijD",
    representative: "金剛寺舞",
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
