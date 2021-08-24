import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

import { Text } from '../../components/Input/Text';
import { Area } from '../../components/Input/Area';
import { Button } from '../../components/Input/Button';
import { Wrap, Title, Caption } from './Feedback.styled';

const Feedback = () => {
    const submitHandler = () => {
        console.log('Submit feedback form');
    }

    return (
        <Wrap>
            <Title>Задайте нам вопрос</Title>
            <Form
                onSubmit={submitHandler}
                render={({ handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Field name="user-name">
                                {({ input, meta }) => {
                                    return (
                                        <Text
                                            type="text"
                                            name="user-name"
                                            value=""
                                            label="Имя"
                                            required
                                        />
                                    );
                                }}
                            </Field>
                            <Text
                                type="email"

                                value=""
                                label="E-mail"
                                name="UserName"

                                required
                            />
                            <Text
                                type="tel"

                                value=""
                                label="Телефон"
                                name="UserName"

                                required
                            />
                            <Area
                                name="Message"
                                value=""
                                label="Сообщение"
                                rows={8}
                            />
                            <Button label="Отправить" theme="primary" submit/>
                            <Caption>
                                С подробной инструкцией по использованию сервиса можно ознакомиться &nbsp;
                                <Link to="/offer">здесь</Link>
                            </Caption>
                        </form>
                    );
                }}
            >
            </Form>
        </Wrap>
    );
}

export default Feedback;