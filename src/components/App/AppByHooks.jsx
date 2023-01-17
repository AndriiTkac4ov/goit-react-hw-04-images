import { useState } from "react";
import { Application } from "./App.styled";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchbarByHooks } from "../Searchbar/SearchbarByHooks";
import { ImageGalleryByHooks } from "../ImageGallery/ImageGalleryByHooks";

export const AppByHooks = () => {
  const [queryImagesFromSubmit, setQueryImagesFromSubmit] = useState('');

  return (
    <Application>
      <SearchbarByHooks onSubmitForApp={setQueryImagesFromSubmit}/>
      <ImageGalleryByHooks queryImages={queryImagesFromSubmit}/>
      <ToastContainer />
    </Application>
  );
};
