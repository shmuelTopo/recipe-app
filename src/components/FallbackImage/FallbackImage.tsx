import { useState } from "react";

interface Image {
  alt: string;
  src: string;
}

interface FallbackImageProps {
  stackOfImages: Image[];
}

const FallbackImage: React.FC<FallbackImageProps> = ({ stackOfImages }) => {
  const [imagesStack, setImagesStack] = useState<Image[]>(stackOfImages);

  const imageLoaded = (index: number) => {
    const newStack = imagesStack.slice(0, index + 1);
    setImagesStack(newStack);
  };

  return (
    <>
      {imagesStack.map((image, index) => {
        const displayStyle =
          index === imagesStack.length - 1 ? "block" : "none";

        return (
          <img
            alt={image.alt}
            src={image.src}
            key={index}
            style={{ display: displayStyle }}
            onLoad={() => imageLoaded(index)}
          />
        );
      })}
    </>
  );
};

export default FallbackImage;
