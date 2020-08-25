import React, { useContext } from "react";
import Image from "../Components/Image";
import { Context } from "../Context";
import getClass from "../utils/index";
export default function Photos() {
  const { allPhotos } = useContext(Context);
  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));

  return (
    <div>
      <main className="photos">{imageElements}</main>
    </div>
  );
}
