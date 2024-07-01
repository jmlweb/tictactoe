import * as React from 'react';

const IMAGES = ['bluey', 'little-einsteins', 'marcus-level'];

const Background = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>();

  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * IMAGES.length);
    setSelectedImage(IMAGES[randomIndex]);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={
        selectedImage
          ? {
              backgroundImage: `url(/backgrounds/${selectedImage}.avif)`,
            }
          : undefined
      }
    />
  );
};

export default Background;
