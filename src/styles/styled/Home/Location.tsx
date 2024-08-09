import styled from 'styled-components';
import { theme } from '../../theme';

export const Location = styled.section`
  width: 100%;
  height: 88vh;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 30px 0px;
  position: relative;
  display: flex;

  *{
    z-index: 99;
  }

  .location-map{
    width: 54%;
    position: absolute;
    z-index: 1;
    top: 14%;
    right: 2%;
    opacity: 0.5;
  }

  .location-content{
    display: flex;
    width: 80%;
    height: max-content;
    flex-direction: column;
    margin-top: 80px;

    .location-iframe{
        width: 600px;
        height: 400px;
    }

    .location-link{
      display: flex;
        width: 600px;
        justify-content: center;
        margin-top: 20px;

        :nth-child(1){
            width: max-content;
            height: max-content;
            padding: 12px 30px;
            font-size: 22px;
            font-family: 'Kanit', sans-serif;
            font-weight: 700;
            text-decoration: none;
            background-color: ${theme.colors.primary};
            color: #fff;
            border-radius: 6px;
            transition: 300ms;
            &:hover{
                scale: 1.08;
            }
        }
    }
  }
`;
