import './detail.scss';

import React, {useEffect, useState} from 'react';

import Castlist from './CastList';
import MovieList from './../../components/movie-list/MovieList';
import VideoList from './VideoList';
import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';
import { useParams } from 'react-router-dom';

const Detail = () => {
  
  const {category, id} = useParams();
  const [items, setItems] = useState(null);
  useEffect(() => {
    const getDetail = async() => {
      const response = await tmdbApi.detail(category, id, {params:{}});
      setItems(response);
      window.scrollTo(0,0)
    }
    getDetail();
  }, [category, id]);
  
  return (
    <>
      {
        items && (
          <>
            <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(items.poster__path || items.backdrop_path)})`}}></div>
            <div className="mb-3 movie-content container">
              <div className="movie-content__poster">
                <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(items.poster__path || items.backdrop_path)})`}}></div>
              </div>
              <div className="movie-content__info">
                <h1 className="title">
                  {items.name || items.title}
                </h1>
                <div className="genres">
                  {
                    items.genres && items.genres.slice(0,5).map((genre, i) => (
                      <span key={i} className="genres__item">{genre.name}</span>
                    ))
                  }
                </div>
                <p className="overview">{items.overview}</p>
                <div className="cast">
                  <div className="section__header">
                    <h2>Casts</h2>
                  </div>
                  <Castlist id={items.id}/>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="section mb-3">
                <VideoList id={items.id} />
              </div>
              <div className="section mb-3">
                <div className="section__header mb-2">
                  <h2>Similar</h2>
                </div>
                <MovieList category={category} type="similar" id={items.id} />
              </div>
            </div>
          </>
        )
      }
    </>
  );
}

export default Detail;
