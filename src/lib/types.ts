export interface BreadcrumbItem {
    label: string;
    link: string;
    isActive?: boolean;
}

export interface ProductRating {
    value: number;
    maxValue: number;
    reviewCount: number;
    reviewText: string;
}

export interface PriceInfo {
    originalPrice: number;
    currentPrice: number;
    discountPercentage: number;
    currency: string;
    stockInfo: string;
}

export interface StoreAvailability {
    text: string[];
    buttonText: string;
}

export interface BenefitItem {
    iconUrl: string;
    iconAlt: string;
    text: string;
}

export interface ProductDetailProps {
    productCode: string;
    title: string;
    breadcrumbs: BreadcrumbItem[];
    rating: ProductRating;
    price: PriceInfo;
    storeAvailability: StoreAvailability;
    benefits: BenefitItem[];
    mainImageUrl: string;
    mainImageAlt: string;
    totalImages: number;
    currentImageIndex: number;
}

