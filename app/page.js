import { Card, Carousel } from "antd";

export default function Home() {
  const imageUrls = [
    "https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
  ];

  const Urls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzIx8FtWi1TJrQqZfRUNJLVvy0eVmuAhuVQ&s",
    "https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.jpg?s=612x612&w=0&k=20&c=blm3IyPyZo5ElWLOjI-hFMG-NrKQ0G76JpWGyNttF8s=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtkcM_nm6nlB2iRXEKZ6hxCL3fSsGpEKdbw&s",
    "https://i.ytimg.com/vi/w4vIO07mT54/maxresdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLelaUZaU2ntSV-r1B9_6X3dYYsxqCJ8iRg&s",
    "https://t3.ftcdn.net/jpg/00/05/04/34/360_F_5043459_YVGGYgI4PTUJcD2IoXi6yb1wU7kLrtIF.jpg",
  ];

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <Carousel
        autoplay
        infinite
        style={{ width: "100%", maxWidth: "1000px" }}
        dotPosition="bottom"
      >
        {imageUrls.map((url, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "400px",
            }}
          >
            <img
              src={url}
              alt={`Carousel slide ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </Carousel>
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {Urls.map((url, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 50%",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={url}
              alt={`Additional image ${index + 1}`}
              style={{ width: "90%", height: "auto", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
