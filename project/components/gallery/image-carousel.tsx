import Image, {StaticImageData} from 'next/image';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: (string | StaticImageData)[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  title: string;
}

export function ImageCarousel({ images, currentIndex, onNext, onPrevious, title }: ImageCarouselProps) {
  return (
    <div className="relative">
      <AspectRatio ratio={16/9}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="object-contain w-full h-full rounded-md"
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </motion.div>
        </AnimatePresence>
      </AspectRatio>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2"
        onClick={onPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={onNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
        <span className="text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}