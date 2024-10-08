// Interface API for image
export interface UnsplashImage {
  src: string;
  alt: string;
  id: string;
  //   description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  avg_color?: string;
  user: {
    id: string;
    username: string;
    name: string;
  };
  likes?: number;
}

// Interface answer from API
export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

// ImageData App
export interface ImageData {
  src: string;
  alt: string;
  id: string;
  //   description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  avg_color?: string;
  user: {
    id: string;
    username: string;
    name: string;
  };
  likes?: number;
}

// ImageData Api
export interface ApiImageData {
  urls: {
    regular?: string;
  };
  alt_description?: string | null;
  user: {
    name?: string;
    bio?: string;
    links?: {
      html?: string;
    };
  };
  likes?: number;
  description?: string | null;
}

// ImageCard
export interface ImageCardProps {
  src: string;
  alt: string;
  avgColor: string;
  openModal: (imageData: ImageData) => void;
  imageData: ImageData;
}

export type OpenModal = (imageData: UnsplashImage) => void;

// export type OpenModal = (imageData: {
//   urls: { small: string };
//   alt_description: string;
// }) => void;

export interface ImageGalleryProps {
  images: ImageData[];
  openModal: (imageData: ImageData) => void;
  //   openModal: OpenModal;
}

export interface ImageModalProps {
  isOpen: boolean;
  onAfterOpen: () => void;
  closeModal: () => void;
  //   imageData?: UnsplashImage | null;
  imageData?: ApiImageData | null;
}

export interface LoadMoreBtnProps {
  children?: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}
