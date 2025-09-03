import React, { useState } from 'react';
import './Home.css'
import Header from '../../components/UI/Header/Header.jsx';
import ExploreMenu from '../../components/UI/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/UI/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/UI/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  );
};

export default Home;