import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "../App/App.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <>
      <ul className={css.gridContainer}>
        {images.map(({ id, urls, alt_description, avg_color }) => (
          <ImageCard
            key={id}
            src={urls.small}
            alt={alt_description || ""}
            avgColor={avg_color}
            openModal={openModal}
            imageData={{
              id,
              src: urls.small,
              alt: alt_description || "",
              // urls: { small: urls.small },
              urls,
              alt_description: alt_description || "",
              avg_color: avg_color,
              // likes: user.likes || 0,
            }}
          />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
