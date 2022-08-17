import styled from "styled-components";


export const LoginForm = styled.form`
    position: absolute;
    top: 30%;
    color: black;
    padding: 15px;
    width: 24rem;
    max-width: 95vw;

    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    animation: slide 1s ease 0s 1 normal forwards;
    

    @keyframes slide {
        0% {
            opacity: 0;
            transform: translateX(-250px);
        }
    
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`
export const BGIMG = styled.img`
    width: 100%;
    height: 100vh;
`

export const LoaderDiv = styled.div`
    position: absolute;
    top: 50%;
    color: white;
    width: 50px;
    height: 50px;
`
export const Card = styled.div`
    max-width: 400px;
    height: 200px;
    border-radius: 0;
    margin: 5px 0;
`
export const Title = styled.div`
    width: 100%;
    background: #e9ecef;
    text-transform: uppercase;
    font-weight: 700;
    height: 100px;
    text-align: left;
    display:flex;
    align-items:center;
    padding-left: 10px
`

export  const Body = styled.div`
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    padding: 3px;
`
export  const Img = styled.img`
    width: 100%;
    height: 100px;
`
export  const LandingPageTitle = styled.div`
    position: absolute;
    top: 35%;
    font-size: 3rem;
    color: white;
    cursor: pointer;
    animation: myAnim 1s ease 0s 1 normal forwards;
    

    @keyframes myAnim {
        0% {
            opacity: 0;
            transform: translateX(-250px);
        }
    
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`
export const ContactCard = styled.div`
    position: absolute;
    top: 30%;
    color: black;
    padding: 15px;
    width: 24rem;
    max-width: 95vw;

    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    animation: contactSlide 1s ease 0s 1 normal forwards;
    

    @keyframes contactSlide {
        0% {
            opacity: 0;
            transform: translateX(-250px);
        }
    
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

`
export const Ul = styled.ul`
    display:flex;
    flex-direction: row;
    list-style: none;
    justify-content: start;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    flex-wrap: wrap
`

export const Navbar = styled.nav`
    position: absolute;
    max-width: 100%;
    height: 10vh;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`
export const Li = styled.li`
    margin-left: 5px;
    margin-right: 5px;
    transition: .3s;
    border-right: 1px solid white;
    &:hover {
        transform: scale(1.05);
    }
    `
