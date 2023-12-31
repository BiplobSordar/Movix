import React, { useRef } from 'react'
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import './style.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import Img from '../lazyLoadImage/Img';
import PosterFallback from '../../assets/no-poster.png'
import dayjs, { Dayjs } from 'dayjs';
import CircleRating from '../circleRating/CircleRating';
import Genres from '../genres/Genres';
import { current } from '@reduxjs/toolkit';


const Carousel = ({ data, loading,endpoint ,title}) => {
    const carouselContainer = useRef()
    const { url } = useSelector((state) => state.home)
    const navigate = useNavigate()
    const navigation = (dir) => {
        const container = carouselContainer.current
        const scrollAmount = dir == 'left' ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20)
        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        })
    }
    const skItem = () => {
        return <div className="skeletonItem">
            <div className="posterBlock skeleton"></div>
            <div className="textBlock">
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        </div>
    }

    return (
        <div className="carousel">
            <ContentWrapper>
                {title&& <div className='carouselTitle'>{title}</div>}
                <BsFillArrowLeftCircleFill onClick={() => navigation("left")}
                    className='carouselLeftNav arrow' />
                <BsFillArrowRightCircleFill onClick={() => navigation("right")} className='carouselRighttNav arrow' />
                {!loading ?
                    <div className="carouselItems" ref={carouselContainer}>
                        {data?.map((item) => {

                            const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback
                            return (
                                <div key={item.id} onClick={() =>
                                    navigate(
                                        `/${item.media_type || endpoint}/${item.id
                                        }`
                                    )
                                }
                                    className='carouselItem'>
                                    <div className="posterBlock">
                                        <Img src={posterUrl} />
                                        <CircleRating rating={item.vote_average.toFixed(1)} />
                                        <Genres data={item.genre_ids} />
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">
                                            {item.title || item.name}
                                        </span>
                                        <span className="date">
                                            {dayjs(item.release_Date).format('MMM D,YYYY')}
                                        </span>
                                    </div>
                                </div>
                            )

                        }

                        )}
                    </div> : <div className='loadingSkeketon'>
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </div>

                }

            </ContentWrapper>
        </div>
    )
}

export default Carousel

