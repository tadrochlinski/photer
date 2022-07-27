import styled from "styled-components";

const GalleryWrapper = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
    grid-template-rows: repeat(auto, 300px);
    gap: 15px;

    div{
        height: 300px;
        border-radius: 10px;
        overflow: hidden;
        transition: transform 250ms;

        &:hover{
            cursor: pointer;
            transform: scale(1.02);
        }
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default GalleryWrapper;