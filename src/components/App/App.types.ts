// Interface API for image
export interface UnsplashImage {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
  };
}

// Interface answer from API
export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

// ImageData App
export interface ImageData {
  id: string;
  src: string;
  alt: string;
  // add
  urls: {
    small: string;
  };
  alt_description: string;
  avg_color: string;
}

// ImageData Api
export interface ApiImageData {
  urls: {
    regular?: string;
  };
  alt_description?: string;
  user: {
    name?: string;
    bio?: string;
    links?: {
      html?: string;
    };
  };
  likes?: number;
  description?: string;
}

// ImageCard
export interface ImageCardProps {
  src: string;
  alt: string;
  avgColor: string;
  openModal: (imageData: ImageData) => void;
  imageData: ImageData;
}

export type OpenModal = (imageData: {
  urls: { small: string };
  alt_description: string;
}) => void;

export interface ImageGalleryProps {
  images: ImageData[];
  openModal: OpenModal;
}

export interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  imageData?: ImageData;
}
