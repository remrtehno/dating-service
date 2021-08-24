import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Wrap, Avatar, Preview, Name, Message, Count } from './Dialog.styled';

interface IDialogsItemProps {
    name: string,
    nick: string,
    avatar: string,
    message: string,
    unread: string,
}

const DialogItem:FC<IDialogsItemProps> = ({ name, nick, avatar, message, unread }) => {
    return (
        <Wrap>
            <Link to={`/chat/${nick}`}>
                <Avatar src={avatar} alt={name} />
                <Preview>
                    <Name>{ name }</Name>
                    <Message>{ message }</Message>
                </Preview>
                <Count>{ unread }</Count>
            </Link>
        </Wrap>
    );
}

export default DialogItem;