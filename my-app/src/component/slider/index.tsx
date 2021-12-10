import React, { ReactEventHandler, useEffect, useState } from 'react';
import logo from './logo.svg';

import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings as CarouselSettings } from 'react-slick';
import { FC } from "react";
import {  MdNavigateNext } from "react-icons/md";
import { IconContext } from "react-icons";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const image = ['./assets/images/slider-1.png', './assets/images/slider-2.png', './assets/images/slider-3.png', './assets/images/slider-1.png', './assets/images/slider-2.png', './assets/images/slider-3.png', './assets/images/slider-1.png', './assets/images/slider-2.png', './assets/images/slider-3.png']

const SliderIdex = () => {

    const [ImageIndex, setImageIndex] = useState<number>(0);
    useEffect(() => {
        console.log(ImageIndex);

    }, [ImageIndex])
    interface Props {
        onClick?: ReactEventHandler
    }
    const NextArrow: FC<Props> = ({ onClick }) => {
        return (
            <button className="arrow next" onClick={onClick}>
                <IconContext.Provider
                    value={{ color: 'white' }}
                >
                    <i><GoChevronRight /></i>
                </IconContext.Provider>
            </button>
        );
    };

    const PrevArrow: FC<Props> = ({ onClick }) => {
        return (
            <button className="arrow prev" onClick={onClick}>
                <IconContext.Provider
                    value={{ color: '#C72D2D' }}
                >
                    <i><GoChevronLeft /></i>
                </IconContext.Provider>
            </button>
        );
    };
    
    const slickSettings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current: number, next: number) => setImageIndex(next),

    };
    return (
        <div className="slider mt-5 ">
            <div className="title text-start">
                <div className="first">
                    DESCRIPTION 
                </div>
                <div className="second">
                    DU SERVICE 
                </div>
            </div>
            <Slider className="" {...slickSettings}>
                {image.map((img, idx) => (
                    <div className={idx == ImageIndex ? "ActiveSlide" : "Inactive"}>
                        <img src={img} alt={img} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default SliderIdex