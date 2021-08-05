import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IUser } from '../../store/users/types';
import Card from '../Card/Card';
import * as S from './Slider.styled';
import Details from "../Details/Details";

interface ISliderProps {
    users: IUser[] | null,
}

const Slider:FC<ISliderProps> = ({ users }) => {
    return (
        <S.Wrap>
            <Swiper slidesPerView={1}>
                {
                    users?.map((item:IUser) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Card
                                    name={item.name}
                                    photos={item.photos}
                                    age={item.age}
                                    city={item.city}
                                    greeting={item.greeting}
                                    online={item.online}
                                    id={item.id}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </S.Wrap>
    );
}

export default Slider;