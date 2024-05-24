import React, { useState } from "react";
import ImageInputComponent from "./ImageInputComponent";

const ImageInput = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedImage(file);
    console.log(selectedImage);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div>
      <ImageInputComponent onChange={handleImageChange} />
      {preview && <img src={preview} alt="Preview" width="100%" />}
    </div>
  );
};

export default ImageInput;
