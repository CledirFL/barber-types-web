import styled from 'styled-components';
import { colorOrange } from '../../styles/colors';

export const Container = styled.div`
  padding-bottom: 5px;
  background: #f6f6f6;
  min-height: 100%;
`;

export const Header = styled.div`
  background: #1f2326;
  height: 100px;
  padding: 20px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 327px;
    margin: 0 auto;

    span {
      color: #f4ede8;
      font-size: 20px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 327px;
  margin: 0 auto;
  margin-bottom: 90px;

  > h1 {
    font-size: 23px;
    margin-top: 32px;
    margin-bottom: 24px;
  }
`;

export const BoxProvider = styled.div`
  padding: 7px 12px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: #fff;
  margin-top: 20px;

  > .info {
    margin-left: 15px;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 16px;
      color: #232129;
      margin-bottom: 10px;
    }

    span {
      display: flex;
      align-items: center;
      margin-bottom: 7px;
      color: #999591;
      font-size: 12px;

      svg {
        margin-right: 7px;
      }
    }
  }
`;
