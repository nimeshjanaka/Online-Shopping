import React from "react";
import CardComponent from "@/components/CardComponent/CardComponent";

const page = () => {
  const items = [
    {
      id: 1,
      imageurl:
        "https://cdn.chic.ae/uploads/Top-10-Luxury-Men-Shoe-Brands-Every-Man-Should-Know.webp",
      itemName: "John Lobb",
      itemDescription:
        "A man's shoes can tell a lot about his fashion sense and who he is. The perfect shoes can make a regular outfit look amazing. ",
      itemPrice: 43500,
      offer: "10%",
    },

    {
      id: 2,
      imageurl:
        "https://cdn.chic.ae/uploads/Top-10-Luxury-Men-Shoe-Brands-Every-Man-Should-Know.webp",
      itemName: "John Lobb",
      itemPrice: 78400,
      offer: "10%",
    },
    {
      id: 3,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryAa-yzswBz1zK50Z2_T4KDNokHxb8FGBYg&s",
      itemName: "John Lobb",
      itemPrice: 28500,
      offer: "10%",
    },
    {
      id: 4,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdey0_nJw4SGZ1W-dCVVDONjzwPJWLM_k6g&s",
      itemName: "John Lobb",
      itemPrice: 41700,
      offer: "10%",
    },
    {
      id: 5,
      imageurl:
        "https://image.made-in-china.com/44f3j00hdfWgeUyhkur/Luxury-Brand-Name-Zanotti-High-Sneaker-Shoes-Men-Shoes-Putian-Shoes.webp",
      itemName: "Zenotti",
      itemPrice: 18500,
      offer: "10%",
    },
    {
      id: 6,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFjQmJuhKbqE8eR6YtBTdjJWL89tsPD0XvA&s",
      itemName: "John Lobb",
      itemPrice: 13000,
      offer: "10%",
    },
    {
      id: 7,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3K1dG8j0Iykx2fEEY_sLjOx-CKkHK_uSU8g&s",
      itemName: "John Lobb",
      itemPrice: 6000,
      offer: "10%",
    },
    {
      id: 1,
      imageurl:
        "https://s.alicdn.com/@sc04/kf/H6101ecaa7fe04f79ab5136563232fbc5S.jpg_720x720q50.jpg",
      itemName: "John Lobb",
      itemPrice: 47000,
      offer: "10%",
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
          itemDescription={item.itemDescription}
          itemPrice={item.itemPrice}
          offerPrice={item.offerPrice}
        />
      ))}
    </div>
  );
};
export default page;
