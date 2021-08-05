import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IUserPhoto, IUser } from '../../store/users/types';
import * as S from './Card.styled';

interface ICardProps extends IUser {}

const Card: FC<ICardProps> = ({ photos, name, age, city, greeting, online }) => {
    return (
        <S.Wrap>
            <Swiper
                slidesPerView={1}
                initialSlide={0}
                pagination={{
                    el: '.swiper-pagination',
                    type: 'bullets',
                }}
            >
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
        </S.Wrap>
    );
}

export default Card;