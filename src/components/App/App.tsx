import { useState, useEffect } from "react";
import { fetchImagesWithTopic } from "../../apiService/articles-api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import css from "../App/App.module.css";
import ImageModal from "../ImageModal/ImageModal";
import { UnsplashImage } from "../App/App.types";
import { UnsplashSearchResponse } from "../App/App.types";

const notify = () => toast("Here is your toast.");

export default function App() {
  let subtitle: HTMLElement | null = null;
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        const data: UnsplashSearchResponse = await fetchImagesWithTopic(
          searchQuery,
          page
        );
        setImages((prevImages) => {
          return page === 1 ? data.results : [...prevImages, ...data.results];
        });
        setShowBtn(data.total_pages > page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, page]);

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
    setPage(1);
  };

  const loadMoreImages = (): void => {
    setPage((prevPage: number) => prevPage + 1);
  };

  const openModal = (imageData: UnsplashImage): void => {
    setSelectedImage(imageData);
    setIsOpen(true);
  };

  function afterOpenModal(): void {
    if (subtitle) {
      subtitle.style.color = "#f00";
    }
  }

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={css.appContainer}>
      <h1 className={css.mainTitle}>Gallery</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {showBtn && (
        <LoadMoreBtn onClick={loadMoreImages} className={css.loadMoreBtn} />
      )}
      <ImageModal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        closeModal={closeModal}
        imageData={selectedImage}
      />
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
}
