import styled from "styled-components";

const Navbar = styled.nav`
    width: 100%;
    height: 60px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 325px){
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    h1{
        font-weight: 500;
        font-size: 1.5rem;
        color: #3d3d3d;
        letter-spacing: 1px;

        @media (min-width: 992px){
            font-size: 2rem;
        }
    }

    input{
        width: 100px;
        height: 30px;
        border: 2px solid #ebebeb;
        margin-right: 10px;
        border-radius: 20px;
        text-align: center;
        transition: 250ms border;

        &:hover, &:focus{
            outline: 0;
            border: 3px solid #0080ff;
        }

        @media (min-width: 992px){
            width: 200px;
        }
    }
`

export default Navbar;