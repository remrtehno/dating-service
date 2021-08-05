import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IUser } from '../../store/users/types';
import * as S from './Feed.styled';

interface IFeedProps {
    users: Array<IUser> | null
}

const Feed:FC<IFeedProps> = ({ users }) => {
    return (
        <S.Wrap>
            <Swiper
                slidesPerView={5}
                initialSlide={0}
            >
                {
                    users?.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <S.Photo src={item.iurl_200} alt="Photo"/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </S.Wrap>
    );
}

export default Feed;