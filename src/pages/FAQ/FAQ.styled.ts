import styled from 'styled-components';
import { WithScroll } from '../../assets/style/common.styled';

export const Wrap = styled(WithScroll)`
  height: 100%;
  padding: 20px 12px 0 20px;
  display: flex;
  flex-flow: column nowrap;

  @media screen and (min-width: 720px) {
    padding: 30px 32px 0 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 12px;
  font-size: 22px;
  line-height: 22px;
  color: #333;
`;

export const Content = styled.div`
  color: #333;
  
  .faq__article {
    width: 100%;
    padding: 16px;
    margin-bottom: 8px;
    text-align: left;
    border-bottom: 1px solid #e8e8ed;
    z-index: 999;
  }
  
  .faq__article-title {
    position: relative;
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    padding-right: 28px;

    &:after {
      cursor: pointer;
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-top: 1.7px solid #717171;
      border-left: 1.7px solid #717171;
      background-position: center center;
      -webkit-background-size: initial;
      background-size: initial;
      right: 5px;
      top: 50%;
      transform: translateY(-50%) rotate(-135deg);
      transition: 0.5s ease all;
    }
  }
  
  .faq__article-content {
    width: 100%;
    display: none;
    animation: fadeInFromNone 0.5s ease-out;

    &--hidden {
      opacity: 0;
    }

    &--active {
      opacity: 1;
      margin-top: 24px;
      display: block;
      animation: fadeIn 0.5s ease-out;
    }

    @keyframes fadeIn {
      0% {
        display: none;
        opacity: 0;
      }

      1% {
        display: block;
        opacity: 0.5;
      }

      100% {
        display: block;
        opacity: 1;
      }
    }
  }
  
  .faq__paragraph {
    width: 100%;
    max-width: 100%;
    margin: 0 0 20px;
    font-size: 14px;
    line-height: 1.56;
    text-align: justify;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      color: #27677a;
    }
  }
  
  .faq__article-icon {
    width: 16px;
    height: 16px;
  }
`;

export const Footer = styled.footer`
  padding: 30px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  a {
    text-decoration: none;
    color: #0083ca;
  }
`;