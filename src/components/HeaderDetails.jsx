import styled from 'styled-components'
import { colors } from './variables'

export const HeaderDetails = styled.div`
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${colors.blackAlt};

        padding: 10px;

        .logotipo img{
            width: 60%;
        }

        @media (max-width: 1200px) {
            .advice {
                display: none;
            }
        }

    }

    .navigation {
        background: ${colors.blue};
        display: flex;
        height: 3rem;
        width: 100%;

        @media (max-width: 600px) {
            height: 5rem;
            border-radius: 15px;
            background: transparent;
        }

        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            list-style: none;
            padding: 0;
            margin: 0;
            color: ${colors.white};
            margin-left: 15rem;

            @media (max-width: 1366px) {
                margin-left: 3rem;
            }

            background: ${colors.blue};

            #item-menu {
                display: flex;
                gap: 30px;
            }

            .burguer {
                display: none;
            }

            @media (max-width: 768px) {
                margin-left: 1rem;
                margin-top: 0.5rem;
                height: 2rem;

                a {
                    margin-right: 1rem;
                }

                .burguer {
                    display: none;
                }
            }

            @media (max-width: 600px) {
                margin-left: 0;
                margin-top: 1rem;
                flex-direction: column;
                align-items: center;
                text-align: center;

                width: 100%;
                border-radius: 15px;
                background: transparent;
            }

            li {
                display: flex;
                padding: 0.7rem 1rem;

                @media (max-width: 855px) {
                    padding: 0.7rem 0;
                    font-size: 0.75rem;
                }

                margin: 0;
                font-size: 1rem;
                font-weight: 400;
                cursor: pointer;
                transition: 0.3s;
                text-transform: uppercase;
                font-family: 'Poppins', sans-serif;

                Link {
                    color: ${colors.white};
                    text-decoration: none;
                }

                :hover {
                    border-bottom: 2px solid ${colors.white};
                }
            }
        }
    }
`

export const HeaderMobile = styled.div`
    width: 100%;
    height: 70px;

    font-size: 1.5rem;
    
    display: flex;
    align-items: center;

    position: fixed;
    z-index: 100;

    background-color: #15171b;

    .logo-drawner{
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        img{
            height: 55px;
        }
    }


    .menu {
        width: 50px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .active {
        background-color: #15171b;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    .drawner {
        width: 100%;
        position: absolute;

        left: 0;
        top: 50px;
        z-index: 999;

    
        background: #15171b;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        .close-icon {
            position: absolute;

            right: 15px;
            top: 10px;

            font-size: 1rem;
        }

        .content-drawner {
            width: 100%;
            padding: 10px 20px 20px 20px;

            display: flex;
            flex-direction: column;
            gap: 10px;

            position: relative;

            p{
                font-size: 1rem;

                color: white;
                font-weight: 700;
            }
            
            .navigation-drawner {
                width: 100%;

                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 30px;

                font-size: 1rem;

                color: white;
            }
        }
    }
`

