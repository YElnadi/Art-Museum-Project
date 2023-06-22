import React from "react";
import { useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

const GalleryView = ({ galleries }) => {
  console.log("galleries", galleries);
  const params = useParams();
  const { galleryId } = params;

  const selectedGallery = galleries.find(
    (gallery) => gallery.galleryid === +galleryId
  );
  const selectedGalleryObjects = selectedGallery.objects
  console.log("selectedGalleryObjects",selectedGallery.objects)
//   selectedGallery.objects.forEach(element => {
//     element.forEach(ele => console.log)
//   })

  if (selectedGallery)
    return (
      <>
        <h2>{selectedGallery.name}</h2>
        <div>
      {selectedGalleryObjects.map((object, index) => (
        <div key={index}>
          {/* Display the baseimageUrl for the first image */}
          <img src={object.images[0].baseimageurl} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
    
    
        
        
      </>        
    );
};

export default GalleryView;
