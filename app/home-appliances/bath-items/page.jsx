import React from "react";
import CardComponent from "@/components/CardComponent/CardComponent";

const page = () => {
  const items = [
    {
      id: 1,
      imageurl:
        "https://m.media-amazon.com/images/I/71J1mjjRmdL._AC_UF1000,1000_QL80_.jpg",
      itemName: "sHOWER FULL SET THAILAND",
      itemPrice: 128500,
      offer: "10%",
    },

    {
      id: 2,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDxP5AzrQn8rvyByp7R4sE2237mwBdahOmw&s",
      itemName: "HAND SHOWER",
      itemPrice: 18500,
      offer: "10%",
    },
    {
      id: 3,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS118wDn-ac1gEqtlrR8Bg-OwyXdQc01biISQ&s",
      itemName: "ITALIAN BATH TUB",
      itemPrice: 545000,
      offer: "10%",
    },
    {
      id: 4,
      imageurl:
        "https://wedabima.com/storage/cover_images/wedabima.com_wall-hung-water-closet-500x5001649566076.jpg",
      itemName: "ITALIAN COMMOD",
      itemPrice: 110000,
      offer: "10%",
    },
    {
      id: 5,
      imageurl: "https://i.ebayimg.com/images/g/1-sAAOSwXTVcR4A9/s-l1200.webp",
      itemName: "SINC",
      itemPrice: 60000,
      offer: "10%",
    },
    {
      id: 6,
      imageurl:
        "https://m.media-amazon.com/images/I/71ZY6pzoHtL._AC_UF1000,1000_QL80_.jpg",
      itemName: "BATHROOM MORROR",
      itemPrice: 35000,
      offer: "10%",
    },
    {
      id: 7,
      imageurl:
        "https://i5.walmartimages.com/seo/6-Piece-Stainless-Steel-Bathroom-Towel-Rack-Set-Wall-Mount-Bathroom-Accessories-Kit-Silver_5f3ffc81-e544-40c8-8f4d-9225b2e4bb4e.d7e08d03bba2e1cc5dc17582ce44b8a0.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      itemName: "BATHROOM TOWEL RACK SET",
      itemPrice: 25000,
      offer: "10%",
    },
    {
      id: 8,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaDPUXD4KyzO2GFaPEirAsX57qvUaXer_mQeWBkzvx7QXEXOi3XJm99FdbFRe2ZMNP_k4&usqp=CAU",
      itemName: "BATH SHOWER GLASS SET",
      itemPrice: 350000,
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
