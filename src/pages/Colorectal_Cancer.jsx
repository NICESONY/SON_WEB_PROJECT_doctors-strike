import React, { useState } from 'react';

const Colorectal_Cancer = () => {
  const [image, setImage] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);

  const analyzeImage = (image) => {
    // 이미지 분석 및 진단 결과 설정
    // 이 부분은 실제 모델을 사용하여 이미지를 분석하는 코드로 대체되어야 합니다.
    // 임시로 예시 결과인 '양성'을 반환합니다.
    return '양성';
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));

    // 이미지 분석 및 진단 결과 설정
    const result = analyzeImage(selectedImage);
    setDiagnosis(result);
  };

  // 결과 확인 버튼 클릭 시 실행되는 함수
  const handleDiagnosisButtonClick = () => {
    // 여기에 결과 확인 버튼이 클릭되었을 때 실행되는 로직을 추가하세요.
    console.log('결과 확인 버튼이 클릭되었습니다.');
  };

  return (
    <div className="page-container">
      <div className="program-heading">
        <h1 style={{ fontSize: "48px", textAlign: "center" }}>대장암 진단 프로그램</h1>
      </div>
      <div className="program-content" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "50px" }}>
        <div className="program-photo" style={{ flex: "1", marginRight: "20px" }}>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {image && <img src={image} alt="Uploaded" style={{ width: "100%", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }} />}
        </div>
        <div className="result-section" style={{ flex: "1", marginLeft: "20px" }}>
          <div className="result-box" style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>결과 확인</h2>
            {diagnosis && <p>진단 결과: {diagnosis}</p>}
            {/* 결과 확인 버튼 */}
            <button onClick={handleDiagnosisButtonClick} style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", marginTop: "20px" }}>결과 확인</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colorectal_Cancer;
