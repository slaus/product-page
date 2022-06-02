import React from 'react';
import './app.scss';
import 'boxicons';
import Product from "./components/product";

import db from './db.json';

function App() {
  return (
    <div className="app container">
        <div className="products">
            <div className="row">
                {
                    db.map((item, index) => (
                        <Product
                            key={index}
                            vendor={item.vendor}
                            img={item.img}
                            discount={item.discount}
                            best={item.best}
                            hit={item.hit}
                            subtitle={item.subtitle}
                            title={item.title}
                            reviews={item.reviews}
                            price={item.price}
                            old={item.old}
                            cash={item.cash}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  );
}

export default App;
