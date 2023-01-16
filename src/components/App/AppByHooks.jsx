import { useState } from "react";
import { Application } from "./App.styled";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchbarByHooks } from "../Searchbar/SearchbarByHooks";
import { ImageGallery } from "../ImageGallery/ImageGallery";

export const AppByHooks = () => {
  const [queryImagesFromSubmit, setQueryImagesFromSubmit] = useState('');
  

  const handleFormSubmit = queryImages => {
    setQueryImagesFromSubmit(queryImages);
  }

  return (
    <Application>
      <SearchbarByHooks onSubmitForApp={handleFormSubmit}/>
      <ImageGallery queryImages={queryImagesFromSubmit}/>
      <ToastContainer />
    </Application>
  );
};
