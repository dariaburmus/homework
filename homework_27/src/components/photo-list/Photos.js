import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Photos.scss";

const Photos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.error("Error loading photos", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [albumId]);

  return (
    <div className="photo-list-container">
      <h2>Photos</h2>
      {isLoading ? (
        <p>Loading photos...</p>
      ) : (
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <div className="photo-item">
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  className="photo"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Photos;
