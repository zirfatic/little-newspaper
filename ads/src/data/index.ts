export type advertisement = {
  img: string;
  link: string;
};

type ads = {
  default: advertisement[];
  sun: advertisement[];
  rain: advertisement[];
};

export const ads: ads = {
  default: [
    {
      img: "https://cdn.discordapp.com/attachments/646529178086146061/1311826145213284464/DR1.webp?ex=674a44cd&is=6748f34d&hm=ef73652098f171c90d6003b17d58affaedd83541487bddad5a517cadfda14b9d&",
      link: "https://davidrocha1.com",
    },
    {
      img: "https://cdn.discordapp.com/attachments/646529178086146061/1311826144873676820/DR2.jpg?ex=674a44cd&is=6748f34d&hm=7f96690246bc70e891dd6c43af5691cff83e89afad862e81e2d4e5b99742cba6&",
      link: "https://davidrocha2.com",
    },
  ],
  sun: [
    {
      img: "https://cdn1.staticpanvel.com.br/produtos/15/111498-15.jpg?ims=424x",
      link: "https://www.panvel.com/panvel/kit-protetor-solar-sundown-praia-e-piscina-fps50-200ml-ganhe-protetor-solar-sundown-fps50-120ml/p-111498?gclid=CjwKCAiA6aW6BhBqEiwA6KzDc2cGYO7dy6BgRaCtCDuZ06fDZlfldn9npU7R9gcUGQUOkn6NpLRbwBoCiaUQAvD_BwE",
    },
    {
      img: "https://cdn1.staticpanvel.com.br/produtos/15/557810-15.jpg?ims=424x",
      link: "https://www.panvel.com/panvel/protetor-solar-nivea-sun-kids-brincando-na-agua-fps60-150ml/p-557810",
    },
  ],
  rain: [
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_739671-MLU72559656424_112023-O.webp",
      link: "https://www.mercadolivre.com.br/guarda-chuva-extra-grande-reforcado-portaria-contra-vento-cor-preto-desenho-do-tecido-liso/p/MLB24115546?pdp_filters=item_id%3AMLB3396244571&from=gshop&matt_tool=43232742&matt_word=&matt_source=google&matt_campaign_id=14302214868&matt_ad_group_id=124787840526&matt_match_type=&matt_network=g&matt_device=c&matt_creative=539425484521&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB24115546-product&matt_product_partition_id=1799170309816&matt_target_id=pla-1799170309816&cq_src=google_ads&cq_cmp=14302214868&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gclid=CjwKCAiA6aW6BhBqEiwA6KzDc4R6ZxV6_SZETQRPDCjCfkAH434zT87fAMKDHyTEXkA-_tiXbY3ycxoCt_wQAvD_BwE",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTkAtXBogQEMhvhNSe4MatNIDj2O-x3XaRKX6AAvWs7WywZnqM-OCx41Fu9o3thyUpf7oHP_7Iz7t-dXbpf0wuaA0ZNuYoUgkkw_2FN5eebdDx-z01GQHW-Mws_Aos7oIiYrEBjBQKHtKc&usqp=CAc",
      link: "https://www.astrodistribuidora.com/capa-de-chuva-de-pvc-com-forro-manga-longa-linha-economica-maicol?gad_source=1&gclid=CjwKCAiA6aW6BhBqEiwA6KzDc-03VrLdW8kftszrP9TM1dUWjgHEdAr2ZhWriaOFELSVEhiAHcLntBoCuEMQAvD_BwE",
    },
  ],
};
