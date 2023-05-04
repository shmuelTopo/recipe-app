import { useState } from "react";

function FallbackImage({stackOfImages}) {
  const [imagesStack, setImagesStack] = useState([...stackOfImages])
  function imageLoded(index) {
    const newStack = imagesStack.slice(0, index+1)
    setImagesStack(newStack)
  }

  return (
    //Add all image to page, only display the image from the last index
    <>
      {imagesStack.map((image, index) => {
        return (<img
          alt={image.alt}
          src={image.src}
          key={index}
          style={{
            display: index === imagesStack.length - 1 ? "block" : "none",
          }}
          onLoad={() => imageLoded(index)}
        />)
      })}
    </>
  );
}

export default FallbackImage;
