import React from "react";
import CardComponent from "@/components/CardComponent/CardComponent";

const page = () => {
  const items = [
    {
      id: 1,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTli4X18-cZDNfFdM3swbFNxhXRigGCK7uYdxA6RywrDFn-sTWLH1X64Hde-QW6hKOvcnQ&usqp=CAU",
      itemName: "HOKEY BAT",
      itemPrice: 24500,
      offer: "10%",
    },

    {
      id: 2,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9VZpoBbQh40EYeTOOLbKdnRFKKfcf40dXg&s",
      itemName: "HOKEY BALL",
      itemPrice: 3500,
      offer: "10%",
    },
    {
      id: 3,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZiI3N53i-h18EOds8PsimiV0QX-kdD6k9A&s",
      itemName: "CRICKET LEATHER BAT",
      itemPrice: 147500,
      offer: "10%",
    },
    {
      id: 4,
      imageurl:
        "https://rukminim2.flixcart.com/image/850/1000/j908cy80/ball/h/y/g/155-forever-set-of-6-genuine-leather-balls-2-part-piece-23-6-original-imaexpj3xdy5mywg.jpeg?q=20&crop=false",
      itemName: "CRICKET LEATHER BALL",
      itemPrice: 8500,
      offer: "10%",
    },
    {
      id: 5,
      imageurl:
        "https://5.imimg.com/data5/FK/ZM/KE/SELLER-1399525/spartan-volleyball.jpg",
      itemName: "VALLY BALL",
      itemPrice: 10500,
      offer: "10%",
    },
    {
      id: 6,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4zvyDy8dLXhX5qiPMdhmMUgTPADMJVT8UA&s",
      itemName: "VALLY BALL NET",
      itemPrice: 13000,
      offer: "10%",
    },
    {
      id: 7,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGK-UKHYB9HVYEdsfXFtzd3OelBQVFfgmNg&s",
      itemName: "FOOT BALL",
      itemPrice: 6000,
      offer: "10%",
    },
    {
      id: 8,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmthKlj-QRBTIvnoEn93A18C8pmXWvcOwlWw&s",
      itemName: "BATTING PAD",
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
