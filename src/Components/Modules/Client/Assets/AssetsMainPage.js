import React from "react";

import AssetCard from "./AssetCard";

export const DATAS = [
  {
    id: 1,
    uname: "Sutter Home",
    pname: "Milk",
    uid: "V1",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568380/prod1_wrycvd.webp",
  },
  {
    id: 2,
    uname: "Manage tools",
    pname: "Biscuit",
    uid: "V2",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
  {
    id: 3,
    uname: "Sutter Home",
    pname: "Bread",
    uid: "V3",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    id: 4,
    uname: "Joel coat wines",
    pname: "water",
    uid: "V4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod4_rrr0jj.jpg",
  },
  {
    id: 5,
    uname: "Joel coat wines",
    pname: "Biscuit",
    uid: "V4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
  {
    id: 6,
    uname: " Manage tools",
    pname: "Biscuit",
    uid: "V2",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568380/prod1_wrycvd.webp",
  },
  {
    id: 7,
    uname: "Sutter Home",
    pname: "Bread",
    uid: "V4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    id: 8,
    uname: "Joel coat wines",
    pname: "Sofa",
    uid: "V6",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665574021/furniImg_ncmisz.jpg",
  },
  {
    id: 9,
    uname: "Manage tools",
    pname: "Bread",
    uid: "V3",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    id: 10,
    uname: "Joel coat wines",
    pname: "Bread",
    uid: "V5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    id: 11,
    uname: " Manage tools",
    pname: "Biscuit",
    uid: "V5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
  {
    id: 12,
    uname: "Sutter Home",
    pname: "water",
    uid: "V2",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod4_rrr0jj.jpg",
  },
  {
    id: 13,
    uname: " Manage tools",
    pname: "water",
    uid: "V3",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod4_rrr0jj.jpg",
  },
  {
    id: 14,
    uname: " Manage tools",
    pname: "Biscuit",
    uid: "V2",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568380/prod1_wrycvd.webp",
  },
  {
    id: 15,
    uname: "Joel coat wines",
    pname: "Bread",
    uid: "V5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    id: 16,
    uname: "Joel coat wines",
    pname: "Sofa",
    uid: "V6",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665574021/furniImg_ncmisz.jpg",
  },
  {
    id: 17,
    uname: "Sutter Home",
    pname: "Milk",
    uid: "V1",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568380/prod1_wrycvd.webp",
  },
  {
    id: 18,
    uname: "Joel coat wines",
    pname: "Bread",
    uid: "V5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    id: 19,
    uname: "Joel coat wines",
    pname: "Biscuit",
    uid: "V4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
  {
    id: 20,
    uname: "Joel coat wines",
    pname: "Bread",
    uid: "V5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    id: 21,
    uname: "Joel coat wines",
    pname: "Biscuit",
    uid: "V4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
  {
    id: 18,
    uname: "Joel coat wines",
    pname: "Bread",
    uid: "V5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    id: 21,
    uname: "Joel coat wines",
    pname: "Biscuit",
    uid: "V4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
];

const AssetsMainPage = () => {
  return (
    <div className="flex overflow-auto  h-screen fixed flex-wrap p-1 gap-3 flex-1 mt-2 pl-4 pb-28  ">
      {DATAS.map((eachUser, index) => (
        <AssetCard eachUser={eachUser} key={index} />
      ))}
    </div>
  );
};

export default AssetsMainPage;
