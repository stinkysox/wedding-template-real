import React, { createContext, useContext, useState } from "react";

// Dummy data for images (no need for UUID generation since we're not modifying state)
const initialCategories = {
  "Right Images": [
    {
      imageUrl:
        "https://i.pinimg.com/736x/24/3a/f3/243af3f924ab6846b1f2095af85bfed6.jpg",
      category: "Right Images",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/f2/f9/4b/f2f94b92e1048b45b372db321e042bce.jpg",
      category: "Right Images",
    },

    {
      imageUrl:
        "https://i.pinimg.com/736x/f1/0f/22/f10f22327238583e66859a6514e4d62e.jpg",
      category: "Right Images",
    },

    {
      imageUrl:
        "https://i.pinimg.com/736x/b7/43/ef/b743ef4649354cd5a45fcfe0f0609afb.jpg",
      category: "Right Images",
    },

    {
      imageUrl:
        "https://i.pinimg.com/736x/05/38/c2/0538c243c1d3599fd7c37f81fdae7384.jpg",
      category: "Right Images",
    },
  ],
  "Left Images": [
    {
      imageUrl:
        "https://i.pinimg.com/736x/50/36/08/50360859203a51e5de8e30e934ab856d.jpg",
      category: "Left Images",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/55/a0/42/55a042ffebaf73b4367b0e78f3c5b08e.jpg",
      category: "Left Images",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/32/de/7c/32de7c6dea7a32733bbc4792dcde506e.jpg",
      category: "Left Images",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/5b/c5/e1/5bc5e1d1222c8c1d1aee9094140ba0ac.jpg",
      category: "Left Images",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/58/e7/9f/58e79f5f30226747fdb75e3db34d9a4a.jpg",
      category: "Left Images",
    },
  ],
  Engagement: [
    {
      imageUrl:
        "https://i.pinimg.com/736x/46/7e/f4/467ef4c644737b5630ba03d492fcdefc.jpg",
      category: "Engagement",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/02/35/fe/0235fede5fadab6faf132f6724c7e364.jpg",
      category: "Engagement",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/5d/3f/1f/5d3f1fa49511b684cdb586b44534c45a.jpg",
      category: "Engagement",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/d9/09/15/d90915eece57fb4881400b3761506d30.jpg",
      category: "Engagement",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/71/81/a4/7181a4533d2d58ff0995316b7027acf3.jpg",
      category: "Engagement",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/85/04/ef/8504efb48321608ff7454103b839ff43.jpg",
      category: "Engagement",
    },
  ],
  "Baby Shoot": [
    {
      imageUrl:
        "https://i.pinimg.com/736x/5a/87/af/5a87af322162d541f74d7a762fc98543.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/28/47/d6/2847d640a6f7a3eb98244e98e0a171b3.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/5a/87/af/5a87af322162d541f74d7a762fc98543.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/7d/95/6a/7d956a18a2e4fa572a95206efc4fe3a0.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/a6/33/db/a633db1344685ae434bb7672f5a84d52.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/a9/12/35/a91235fbbbeae6a77447cf339b6c3491.jpg",
      category: "Baby Shoot",
    },
  ],
  Wedding: [
    {
      imageUrl:
        "https://i.pinimg.com/736x/40/1d/fd/401dfddc2f315f193c93b60689c668f0.jpg",
      category: "Wedding",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/0e/99/48/0e9948e8b4f8190b56188541bc5c6824.jpg",
      category: "Wedding",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/2c/79/49/2c7949bb2d7c00a4bb6e3864e92431c4.jpg",
      category: "Wedding",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/40/1d/fd/401dfddc2f315f193c93b60689c668f0.jpg",
      category: "Wedding",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/e0/88/7c/e0887c3480cfc11cd908584abef5f12e.jpg",
      category: "Wedding",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/2f/93/f8/2f93f855f5824049f80d3b5c60647f13.jpg",
      category: "Wedding",
    },
  ],
  Haldi: [
    {
      imageUrl:
        "https://i.pinimg.com/736x/95/eb/2a/95eb2a6eb73ac2b2ba29a202f2aaa2c8.jpg",
      category: "Haldi",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/ca/39/ed/ca39ed3c77b34e0a0423f7be4bf1d75b.jpg",
      category: "Haldi",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/0b/57/a0/0b57a00d34576c190207988cad3d133f.jpg",
      category: "Haldi",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/1a/15/46/1a1546509f04169015284d9a48094cea.jpg",
      category: "Haldi",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/03/fc/23/03fc233f74c9b035f08953ad2f964b3e.jpg",
      category: "Haldi",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/d8/7e/b6/d87eb629793c31e4c5f6ee4e943b2d03.jpg",
      category: "Haldi",
    },
  ],
  Prewedding: [
    {
      imageUrl:
        "https://i.pinimg.com/736x/40/13/2a/40132a79d7927e552319e0cc921194d8.jpg",
      category: "Prewedding",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/f2/89/81/f289810ccc03cca40b06eacd89177137.jpg",
      category: "Prewedding",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/5b/c4/1c/5bc41c7f3f1984f66cd03695b01ee06a.jpg",
      category: "Prewedding",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/69/32/e6/6932e6ceb852fa0bb447606f87e5f955.jpg",
      category: "Prewedding",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/5b/4c/7a/5b4c7afe5f80febbbd8493534af695ac.jpg",
      category: "Prewedding",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/18/52/d1/1852d1ab75d830955c8c1e37936bacf0.jpg",
      category: "Prewedding",
    },
  ],
};

// Dummy videos (embed URLs)
const initialVideos = [
  "https://www.youtube.com/embed/IMohdHhdrmo", // Rickroll as a placeholder
  "https://www.youtube.com/embed/ardtvdR28SQ",
  "https://www.youtube.com/embed/IBFWlwnrpdU",
  "https://www.youtube.com/embed/3ppE8JcZoX0",
  "https://www.youtube.com/embed/k1gj5wCLAhc",
];

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [images] = useState(initialCategories);
  const [videos] = useState(initialVideos);

  return (
    <ImageContext.Provider value={{ images, videos }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);
export default ImageProvider;
