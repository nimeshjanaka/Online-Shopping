import React from "react";
import CardComponent from "@/components/CardComponent/CardComponent";

const page = () => {
  const items = [
    {
      id: 1,
      imageurl:
        "https://www.darveys.com/blog/wp-content/uploads/2021/09/01.jpg",
      itemName: "ALEXENDER MCQEEN",
      itemDescription:
        "A man's shoes can tell a lot about his fashion sense and who he is. The perfect shoes can make a regular outfit look amazing. ",
      itemPrice: 4500,
      offer: "10%",
    },

    {
      id: 2,
      imageurl:
        "https://www.darveys.com/blog/wp-content/uploads/2021/09/02.jpg",
      itemName: "JIMMY CHOO",
      itemPrice: 14700,
      offer: "10%",
    },
    {
      id: 3,
      imageurl:
        "https://i0.wp.com/textilelearner.net/wp-content/uploads/2024/02/Asics-shoe.jpg?resize=600%2C423&ssl=1",
      itemName: "John Lobb",
      itemPrice: 8500,
      offer: "10%",
    },
    {
      id: 4,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEAWzoEZOOKt3mjdxHOouE9OKT77lUXdt8tA&s",
      itemName: "INC",
      itemPrice: 17000,
      offer: "10%",
    },
    {
      id: 5,
      imageurl:
        "https://qph.cf2.quoracdn.net/main-qimg-57979ff33c9f4324925e19ec24be36ee-pjlq",
      itemName: "QUORA",
      itemPrice: 18500,
      offer: "10%",
    },
    {
      id: 6,
      imageurl:
        "https://www.darveys.com/blog/wp-content/uploads/2021/09/09.jpg",
      itemName: "PRADA",
      itemPrice: 13000,
      offer: "10%",
    },
    {
      id: 7,
      imageurl:
        "https://www.darveys.com/blog/wp-content/uploads/2021/09/03.jpg",
      itemName: "MIU MIU",
      itemPrice: 6000,
      offer: "10%",
    },
    {
      id: 1,
      imageurl:
        "https://www.darveys.com/blog/wp-content/uploads/2021/09/08.jpg",
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
