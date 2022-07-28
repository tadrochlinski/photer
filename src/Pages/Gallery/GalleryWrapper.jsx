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
        box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;

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