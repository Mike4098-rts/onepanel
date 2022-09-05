const Cards = () => {
  const data = [
    {
      id: 1,
      name: "HP pavillion",
      brand: "HP",
      price: 10000,
      image:
        "https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero",
    },
    {
      id: 2,
      name: "HP pavillion",
      brand: "HP",
      price: 10000,
      image:
        "https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero",
    },
    {
      id: 3,
      name: "HP pavillion",
      brand: "HP",
      price: 10000,
      image:
        "https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero",
    },
    {
      id: 4,
      name: "HP pavillion",
      brand: "HP",
      price: 10000,
      image:
        "https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero",
    },
    {
      id: 5,
      name: "HP pavillion",
      brand: "HP",
      price: 10000,
      image:
        "https://id-media.apjonlinecdn.com/catalog/product/4/9/498R8PA-2_T1657691363.png",
    },
    {
      id: 6,
      name: "HP pavillion",
      brand: "HP",
      price: 10000,
      image:
        "https://www.elgiganten.dk/resource/responsive-image/200222/image_text/mobile/4/315/189/lenovo-legion-with-an-amd-processor.jpg",
    },
  ];

  return (
    <div className="xl:grid flex flex-col xl:grid-cols-3 gap-11 items-center xl:ml-16 xl:mt-5 mt-10">
      {data.map((info) => (
        <div className=" group bg-background" key={info.id}>
            <img className="w-64 h-64" src={info.image} alt="" />
          <div className="opacity-0 h-0 group-hover:opacity-100 group-hover:h-full">
          ...
          </div>
          {console.log(info.image)}
          <h1>{info.name}</h1>
          <h3>{info.brand}</h3>
          <span>kr: {info.price}</span>
        </div>
      ))}
    </div>
  );
};

export default Cards;
