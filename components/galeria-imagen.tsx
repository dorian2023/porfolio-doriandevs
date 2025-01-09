import React from "react";
export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        "https://i.ibb.co/z6849WZ/sofa-mariana.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/z6849WZ/sofa-mariana.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/z6849WZ/sofa-mariana.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/z6849WZ/sofa-mariana.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/z6849WZ/sofa-mariana.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/z6849WZ/sofa-mariana.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/z6849WZ/sofa-mariana.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/z6849WZ/sofa-mariana.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/z6849WZ/sofa-mariana.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/3sPDLpR/karen.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/nRwKPTd/aluminio.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/4VZ0Zmj/infinito.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/pJg5Gfz/comedorx.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/7bFMnPn/esmeralda.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/82XWpTJ/leslie1.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/TP68tGG/moises.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/zrrB96Y/nicole.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/gMWKd6b/leslie2.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/zSKZHGY/paola.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/sPPwDmr/marian2.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/vJk8FVT/marbella.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/Jd7Qdt0/primola.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/z6849WZ/sofa-mariana.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/2h8KZBH/Milord.jpg",
    },
  ];
  
  const [active, setActive] = React.useState(
    "https://i.ibb.co/hB8Jgk1/marian3.png",
  );
  
  return (
    <div className="md:w-[700px] grid gap-1 w-10/12">
      <div>
        <img
          className="h-auto w-full md:w-full max-w-full rounded-lg object-cover object-center md:h-[550px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 md:grid-cols-12 gap-3 md:gap-2">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="md:h-20 md:max-w-auto md:ml-2 cursor-pointer rounded-sm object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
