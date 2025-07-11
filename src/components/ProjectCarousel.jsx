import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

export default function ProjectCarousel ({ images, alt = "Project screenshots" }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const openFullscreen = () => {
        setIsFullscreen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
    };

    // close fullscreen on Esc
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isFullscreen) {
                closeFullscreen();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isFullscreen]);

    // prevent body scroll when fullscreen
    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isFullscreen]);

    // don't render carousel if there's one or less img
    if (!images || images.length <= 1) {
        return (
        <div className="carousel">
            {images && images.length === 1 ? (
                <img src={images[0]} alt={alt} className="w-full rounded-t-xl" />
            ) : (
                <div className="w-full h-48 bg-gray-200 rounded-t-xl flex items-center justify-center">
                    <span className="text-gray-500">No images available</span>
                </div>
            )}
        </div>
        );
    }

    return (
        <>
        <div className="carousel">
            <div className="carousel-container">
                <div 
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="carousel-slide">
                            <img 
                            src={image} 
                            alt={`${alt} ${index + 1}`} 
                            className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            
                {/* Navigation arrows */}
                <button 
                    className="carousel-btn carousel-btn-prev"
                    onClick={prevSlide}
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button 
                    className="carousel-btn carousel-btn-next"
                    onClick={nextSlide}
                    aria-label="Next image"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                {/* Fullscreen button */}
                <button 
                    className="carousel-fullscreen-btn"
                    onClick={openFullscreen}
                    aria-label="View fullscreen"
                >
                    <Maximize2 className="w-4 h-4" />
                </button>
            </div>
                
            {/* Dots indicator */}
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? 'carousel-dot-active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>

        {/* Fullscreen Modal */}
        {isFullscreen && (
            <div className="carousel-modal">
                <div className="carousel-modal-overlay" onClick={closeFullscreen} />
                    <div className="carousel-modal-content">
                        <div className="carousel-modal-header">
                        <h3 className="text-lg font-semibold text-white">
                            {alt} ({currentIndex + 1} of {images.length})
                        </h3>
                        <button 
                            className="carousel-modal-close"
                            onClick={closeFullscreen}
                            aria-label="Close fullscreen"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    
                    <div className="carousel-modal-body">
                        <div className="carousel-modal-image-container">
                            <img 
                            src={images[currentIndex]} 
                            alt={`${alt} ${currentIndex + 1}`}
                            className="carousel-modal-image"
                            />
                            
                            {/* Modal navigation arrows */}
                            {images.length > 1 && (
                            <>
                                <button 
                                className="carousel-modal-btn carousel-modal-btn-prev"
                                onClick={prevSlide}
                                aria-label="Previous image"
                                >
                                <ChevronLeft className="w-6 h-6" />
                                </button>
                                
                                <button 
                                className="carousel-modal-btn carousel-modal-btn-next"
                                onClick={nextSlide}
                                aria-label="Next image"
                                >
                                <ChevronRight className="w-6 h-6" />
                                </button>
                            </>
                            )}
                        </div>
                    
                        {/* Modal dots indicator */}
                        {images.length > 1 && (
                            <div className="carousel-modal-dots">
                            {images.map((_, index) => (
                                <button
                                key={index}
                                className={`carousel-modal-dot ${index === currentIndex ? 'carousel-modal-dot-active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )}
        </>
    );
};