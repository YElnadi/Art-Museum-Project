import React from "react";
import { useParams } from "react-router-dom";

const GalleryView = ({ galleries }) => {
  console.log("galleries", galleries);
  const params = useParams();
  const { galleryId } = params;

  const selectedGallery = galleries.find(
    (gallery) => gallery.galleryid === +galleryId
  );
  if (selectedGallery)
    return (
      <>
        <h2>{selectedGallery.name}</h2>
      </>
    );
};

export default GalleryView;
