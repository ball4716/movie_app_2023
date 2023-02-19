import React from "react";
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
    );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://m.rainbowfood.co.kr/web/product/big/202203/de75f295f45209fd66d27f9a34dfcdbf.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://src.hidoc.co.kr/image/lib/2021/8/27/1630049987719_0.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg',
    rating: 3.8,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2019/01/12/b9343d314206275c1b6d0d0c4fcc2ce71.jpg',
    rating: 3.19,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://t1.daumcdn.net/cfile/tistory/997BDD475F598EDF21',
    rating: 2.5,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
