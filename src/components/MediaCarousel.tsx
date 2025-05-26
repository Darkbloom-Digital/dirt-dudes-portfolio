import { useState } from 'react';
import Image from 'next/image';

// Sample media data - replace with your actual content
const tier1Media: MediaItemType[] = [
  { type: 'image', src: '/images/placeholder.svg', alt: 'Land clearing project 1' },
  { type: 'video', src: '/videos/sample1.mp4', thumbnail: '/images/placeholder.svg', alt: 'Video: Land clearing project 1' },
  { type: 'image', src: '/images/placeholder.svg', alt: 'Excavation work 1' },
  { type: 'video', src: '/videos/sample2.mp4', thumbnail: '/images/placeholder.svg', alt: 'Video: Excavation work 1' },
  { type: 'image', src: '/images/placeholder.svg', alt: 'Tree removal 1' },
  { type: 'image', src: '/images/placeholder.svg', alt: 'Site preparation 1' },
];

const tier2Media: MediaItemType[] = [
  { type: 'video', src: '/videos/sample3.mp4', thumbnail: '/images/placeholder.svg', alt: 'Video: Land clearing project 2' },
  { type: 'image', src: '/images/placeholder.svg', alt: 'Land clearing project 2' },
  { type: 'image', src: '/images/placeholder.svg', alt: 'Excavation work 2' },
  { type: 'video', src: '/videos/sample4.mp4', thumbnail: '/images/placeholder.svg', alt: 'Video: Excavation work 2' },
  { type: 'image', src: '/images/placeholder.svg', alt: 'Tree removal 2' },
  { type: 'image', src: '/images/placeholder.svg', alt: 'Site preparation 2' },
];

// Define a type for media items
interface MediaItemType {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  thumbnail?: string;
}

interface MediaItemProps {
  item: MediaItemType;
  index: number;
  onItemClick: (item: MediaItemType) => void;
}

const MediaItem = ({ item, index, onItemClick }: MediaItemProps) => {
  return (
    <div 
      className="relative w-[300px] h-[200px] mx-4 rounded-lg overflow-hidden group cursor-pointer flex-shrink-0"
      onClick={() => onItemClick(item)}
    >
      {/* Thumbnail/Image */}
      <Image
        src={item.type === 'video' ? item.thumbnail! : item.src}
        alt={item.alt || `Media item ${index + 1}`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
      
      {/* Play button for videos */}
      {item.type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

const MediaModal = ({ item, onClose }: { item: MediaItemType; onClose: () => void }) => {
  // Prevent clicks inside the modal from closing it
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-7xl w-full bg-black rounded-lg overflow-hidden"
        onClick={handleContentClick}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-500 z-10"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {item.type === 'video' ? (
          <div className="relative pt-[56.25%]">
            <video
              className="absolute inset-0 w-full h-full"
              controls
              autoPlay
              src={item.src}
            />
          </div>
        ) : (
          <div className="relative h-[80vh]">
            <Image
              src={item.src}
              alt={item.alt || 'Media item'}
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default function MediaCarousel() {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);

  const handleItemClick = (item: MediaItemType) => {
    setSelectedItem(item);
  };

  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center">
            <h2 className="text-6xl font-extrabold text-white">
              OUR WORK
            </h2>
            <div className="h-[2px] bg-red-600 flex-grow ml-8"></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* First Tier */}
          <div className="mb-8 overflow-hidden">
            <div className="track-horizontal">
              {/* Triple the items for smoother loop */}
              {[...tier1Media, ...tier1Media, ...tier1Media].map((item, index) => (
                <MediaItem 
                  key={index} 
                  item={item} 
                  index={index}
                  onItemClick={handleItemClick}
                />
              ))}
            </div>
          </div>

          {/* Second Tier */}
          <div className="overflow-hidden">
            <div className="track-horizontal-reverse">
              {/* Triple the items for smoother loop */}
              {[...tier2Media, ...tier2Media, ...tier2Media].map((item, index) => (
                <MediaItem 
                  key={index} 
                  item={item} 
                  index={index}
                  onItemClick={handleItemClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <MediaModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}

      {/* Add custom styles */}
      <style jsx global>{`
        .track-horizontal {
          display: flex;
          animation: slideRight 50s linear infinite;
          width: fit-content;
        }

        .track-horizontal-reverse {
          display: flex;
          animation: slideLeft 50s linear infinite;
          width: fit-content;
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * 6));
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(calc(-300px * 6));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
} 