import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
// import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import DocumentUpload from './pages/DocumentUpload';  // Import DocumentUpload component
import CameraCapture from './components/FaceDetection';
import Navbar from './components/Navbar';
import OCRComponent from './components/OCRComponent';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/camera-capture" element={<CameraCapture />} />
          <Route path="/upload" element={<DocumentUpload />} />  {/* Add the DocumentUpload route */}
          <Route path="/text-extract" element={<OCRComponent   />} />  {/* Add the DocumentUpload route */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;