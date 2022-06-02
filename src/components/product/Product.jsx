import React from 'react';

import './product.scss';

const Product = props => {

    return (
        <div className="col-12 col-sm-6 col-lg-4 p-4">
            <div className="products__item">
                <ProductVendor vendor={props.vendor}/>
                <ProductImg img={props.img} title={props.title}/>
                <ProductChips discount={props.discount} best={props.best} hit={props.hit}/>
                <ProductSubtitle subtitle={props.subtitle}/>
                <ProductTitle title={props.title}/>
                <ProductStars reviews={props.reviews}/>
                <ProductPrice price={props.price} old={props.old} cash={props.cash}/>
                <ProductBuy props={props}/>
            </div>
        </div>
    );
};

export default Product;

const ProductVendor = props => {
    return (
        <>
            {
                props.vendor &&
                <div className="products__item__vendor">
                    Код товару {props.vendor}
                </div>
            }
        </>
    );
};

const ProductImg = props => {
    return (
        <>
            {
                props.img &&
                <div className="products__item__img">
                    <a href="">
                        <img src={props.img} alt={props.title} className="img-fluid"/>
                    </a>
                </div>
            }
        </>
    );
};

const ProductChips = props => {
    return (
        <div className="products__item__chips">
            {
                props.discount &&
                <div className="products__item__chips__item">-{props.discount}%</div>
            }
            {
                props.best &&
                <div className="products__item__chips__item products__item__chips__item__best">Найкраща ціна</div>
            }
            {
                props.hit &&
                <div className="products__item__chips__item">Хіт</div>
            }
        </div>
    );
};

const ProductSubtitle = props => {
    return (
        <>
            {
                props.subtitle &&
                <div className="products__item__subtitle">
                    {props.subtitle}
                </div>
            }
        </>
    );
};

const ProductTitle = props => {
    return (
        <h2 className="products__item__title">
            <a href="">
                {props.title}
            </a>
        </h2>
    );
};

const ProductStars = props => {

    return (
        <>
            {
                props.reviews &&
                <div className="products__item__stars">
                    <div className="products__item__stars__block">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                    </div>

                    <div className="products__item__stars__title">
                        {props.reviews} відгуків
                    </div>
                </div>
            }
        </>
    );
};

const ProductPrice = props => {
    return (
        <div className="products__item__price">
            <span>Ціна</span>
            <div className="products__item__price__block">
                <span className="products__item__price__total">{props.price} грн</span>
                {
                    props.cash &&
                    <span className="products__item__price__cashback">
                    + {props.cash} грн кешбек
                </span>
                }
            </div>
            {
                props.old &&
                <div className="products__item__price__old">
                    {props.old} грн
                </div>
            }
        </div>
    );
};

const ProductBuy = () => {
    return (
        <div className="products__item__buy">
            <button className="btn btn-buy">
                Купити
            </button>
            <button className="btn btn-love">
                <i className="bx bxs-heart"></i>
            </button>
            <button className="btn btn-bookmark">
                <i className="bx bxs-bookmark"></i>
            </button>
        </div>
    );
};

