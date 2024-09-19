import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "../App/App.types";
import { ImageData } from "../App/App.types";

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
                raw: urls.raw || "", // Додайте всі потрібні поля
                full: urls.full || "", // Додайте всі потрібні поля
                regular: urls.regular || "", // Додайте всі потрібні поля
                small: urls.small || "", // Додайте всі потрібні поля
                thumb: urls.thumb || "",
              },
              // urls,
              alt_description: alt_description || "",
              avg_color: avg_color || "",
              likes: likes || 0,
              // description: description || "", // Додайте description
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
