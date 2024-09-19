import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "../App/App.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <>
      <ul className={css.gridContainer}>
        {images.map(({ id, urls, alt_description, avg_color, likes, user }) => (
          <ImageCard
            key={id}
            src={urls.small}
            alt={alt_description || ""}
            avgColor={avg_color || ""}
            openModal={openModal}
            imageData={{
              id,
              src: urls.small,
              alt: alt_description || "",
              urls: {
                raw: urls.raw || "",
                full: urls.full || "",
                regular: urls.regular || "",
                small: urls.small || "",
                thumb: urls.thumb || "",
              },
              alt_description: alt_description || "",
              avg_color: avg_color || "",
              likes: likes || 0,
              // description: description || "",
              user: {
                id: user.id,
                username: user.username,
                name: user.name,
              },
            }}
          />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
