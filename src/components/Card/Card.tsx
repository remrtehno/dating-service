import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { SwiperOptions,  Pagination} from 'swiper';
import { IUserPhoto, IUser } from '../../store/users/types';
import * as S from './Card.styled';

SwiperCore.use([Pagination]);

interface ICardProps extends IUser {}

const swiperParams:SwiperOptions = {
    slidesPerView: 1,
    initialSlide: 0,
    watchOverflow: true,
    preloadImages: false,
    lazy: true,
    watchSlidesVisibility: true,
    nested: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    on: {
        'init': () => false,
        'slideChange': () => console.log(1),
    },
}

const Card: FC<ICardProps> = ({ photos, name, age, city, greeting, online }) => {
    return (
        <S.Wrap>
            <Swiper { ...swiperParams }>
                {
                  photos?.map((item:IUserPhoto) => {
                      return (
                          <SwiperSlide key={item.id}>
                              <S.Photo src={item.url} alt="Photo"/>
                          </SwiperSlide>
                      );
                  })
                }
            </Swiper>
            <div className="swiper-pagination" />

        </S.Wrap>
    );
}

export default Card;