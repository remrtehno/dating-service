import React from 'react';
import { Form } from 'react-final-form';

import { APP_STORE_LINKS } from '../../constants';
import { Radio } from '../../components/Input/Radio';
import { Button } from '../../components/Input/Button';
import GooglePlayImg from '../../assets/images/btn-google-play.png';
import AppGalleryImg from '../../assets/images/btn-app-gallery.png';
import * as S from './Settings.styled';

const Settings = () => {
    const submitHandler = () => {
        console.log('Submit settings form');
    };

    return (
        <S.Wrap>
            <Form
                onSubmit={submitHandler}
                render={() => {
                    return (
                        <form action="/">
                            <S.FormGroupWrap>
                                <h4>Язык:</h4>
                                <Radio checked={true} label="Булорусский" name="language"/>
                                <Radio checked={false} label="Русский" name="language"/>
                            </S.FormGroupWrap>
                            <S.FormGroupWrap>
                                <h4>Время отправки СМС:</h4>
                                <Radio checked={true} label="с 9:00 до 20:00" name="language"/>
                                <Radio checked={false} label="В любое время" name="language"/>
                                <Radio checked={false} label="Не присылать" name="language"/>
                            </S.FormGroupWrap>
                            <Button label="Сохранить" theme="primary"/>
                        </form>
                    );
                }}
            />

            <S.AppStoreLink href={APP_STORE_LINKS.GOOGLE}>
                <img src={GooglePlayImg} alt="Google Play"/>
            </S.AppStoreLink>

            <S.AppStoreLink href={APP_STORE_LINKS.HUAWEI}>
                <img src={AppGalleryImg} alt="App Gallery"/>
            </S.AppStoreLink>

            <S.LogoutBtn>
                Выйти
            </S.LogoutBtn>

            <S.RemoveAccBtn>
                Удалить анкету
            </S.RemoveAccBtn>

        </S.Wrap>
    );
}

export default Settings;