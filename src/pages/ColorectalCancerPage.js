import React, { useState } from 'react';
import axios from 'axios';

const ColorectalCancerPage = () => {
  const [image, setImage] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);

  const handleImageUpload = async (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));

    // 이미지를 서버로 업로드
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('/api/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      // 예측 결과 설정
      setDiagnosis(response.data.result);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" style={{ width: "100px", height: "100px" }} />}
      {diagnosis && <p>진단 결과: {diagnosis}</p>}
    </div>
  );
};

export default ColorectalCancerPage;
