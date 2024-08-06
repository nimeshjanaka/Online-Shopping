import React from "react";
import { useRouter } from "next/router";
import BathItems from "@/components/ui/Menu/Home Appliances/Bath Items";
import Decorator from "@/components/ui/Menu/Home Appliances/Decorator";
import CleaningItems from "@/components/ui/Menu/Home Appliances/Cleaning Items";
import Furniture from "@/components/ui/Menu/Home Appliances/Furniture";
import MediaMusic from "@/components/ui/Menu/Home Appliances/Media & Music"; // Assuming you have this component

const componentsMap = {
  "bath-items": BathItems,
  decorator: Decorator,
  "cleaning-items": CleaningItems,
  furniture: Furniture,
  "media-music": MediaMusic,
};

const HomeApplianceItem = () => {
  const router = useRouter();
  const { item } = router.query;

  const ItemComponent =
    componentsMap[item] || (() => <div>Item not found</div>);

  return (
    <div>
      <h1>{item.replace("-", " ").toUpperCase()}</h1>
      <ItemComponent />
    </div>
  );
};

export default HomeApplianceItem;
