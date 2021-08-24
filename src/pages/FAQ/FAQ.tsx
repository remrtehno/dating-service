import React, {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../config/constants';
import { RootState } from '../../store';
import { getFaq } from '../../store/faq/actions';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import * as S from './FAQ.styled';

const FAQ = () => {
    const dispatch = useDispatch();
    const { isLoading, content, error } = useSelector((state:RootState) => state.faq);

    useEffect(() => {
        dispatch(getFaq());
    }, [dispatch]);

    const handleClick = (e:any) => {
        console.log(e);
        const point = e.target;
        const content = point.querySelector('.faq__article-content');

        if (point.className === 'faq__article') {
            point.classList.add('faq__article--active');
            content.classList.add('faq__article-content--active');
        } else {
            point.classList.remove('faq__article--active');
            content.classList.remove('faq__article-content--active');
        }
    }

    if (isLoading) return <Loader/>;
    if (error) return <Error message="Что-то пошло не так..."/>;

    return (
        <S.Wrap>
            <S.Title>МТС - Справка</S.Title>
            <S.Content
                dangerouslySetInnerHTML={{ __html: content }}
                onClick={handleClick}
            />
            <S.Footer>
                <Link to={ROUTES.Feedback}>Обратная связь</Link>
                <Link to={ROUTES.Dialogs}>Агент поддержки</Link>
            </S.Footer>
        </S.Wrap>
    );
}

export default FAQ;