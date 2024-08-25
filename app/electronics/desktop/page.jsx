import React from "react";
import CardComponent from "@/components/CardComponent/CardComponent";

const page = () => {
  const items = [
    {
      id: 1,
      imageurl: "https://m.media-amazon.com/images/I/61XLVUhdSAL._SL1000_.jpg",
      itemName: "Desktop i5 Processor",
      itemPrice: 27500,
      offer: "10%",
    },
    {
      id: 2,
      imageurl:
        "https://cdn.mos.cms.futurecdn.net/VcEPKxr3e3n28Y4AUzoJxk-650-80.jpg.webp",
      itemName: "Motherboard",
      itemPrice: 48700,
      offerDiscount: "8%",
    },
    {
      id: 3,
      imageurl:
        "https://mdcomputers.lk/wp-content/uploads/2023/08/17b72dc0-44cd-40c7-ad94-aad1791f8585.__CR001200900_PT0_SX600_V1___.jpg",
      itemName: "Little Coffy Casing",
      itemPrice: 37500,
      offerDiscount: "12%",
    },
    {
      id: 4,
      imageurl:
        "https://zentech.lk/wp-content/uploads/2021/03/Power-Train-Normal-Casing.png",
      itemName: "Power Train Casing",
      itemPrice: 78000,
      offerDiscount: "14%",
    },
    {
      id: 5,
      imageurl:
        "https://cdn.mos.cms.futurecdn.net/7ME636bQNGEGGrg5qEtWrK-650-80.jpg.webp",
      itemName: "Power supply",
      itemPrice: 8000,
      offerDiscount: "8%",
    },
    {
      id: 6,
      imageurl:
        "https://www.zotac.com/hk/system/files/styles/w1024/private/product_gallery/graphics_cards/zt-d40600g-10l-image01.jpg?itok=u9y5xRsX",
      itemName: "Zotac Gaming GeForce RTX 4060 8GB Solo",
      itemPrice: 71000,
      offerDiscount: "21%",
    },

    {
      id: 8,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0UQT8occ_EQNBIgL_SHJfFwU3i0KZHJhscg&s",
      itemName: "Kingston SSD 240GB",
      itemPrice: 12500,
      offerDiscount: "10%",
    },
    {
      id: 9,
      imageurl:
        "https://www.computertechreviews.com/wp-content/uploads/2019/02/how-to-install-a-hard-disk-in-our-computer-desktop-pc-step-by-step-guide.png",
      itemName: "Hard Disk",
      itemPrice: 4000,
      offerDiscount: "0%",
    },
  ];

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {items.map((item) => (
        <CardComponent
          key={item.id}
          imageurl={item.imageurl}
          itemName={item.itemName}
          itemPrice={item.itemPrice}
          offerPrice={item.offerPrice}
        />
      ))}
    </div>
  );
};

export default page;
