// import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { Landing } from 'pages/Landing/Landing';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};
