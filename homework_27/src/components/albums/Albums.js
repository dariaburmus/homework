import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./Albums.scss";

const Albums = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error("Error fetching albums:", error));
  }, [userId]);

  return (
    <div className="album-list-container">
      <h2>Albums</h2>

      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <div className="album-item">
              <p>{album.title}</p>
              <Link to={`/photos/${album.id}`} className="photo-link">
                Photos
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
