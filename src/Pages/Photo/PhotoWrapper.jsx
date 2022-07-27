import styled from "styled-components";

const PhotoWrapper = styled.div`
    width: 100%;
    padding: 10px;

    img{
        max-width: 100%;
        margin-top: 15px;
        box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    }

    h1{
        margin-bottom: 5px;
        font-weight: 500;
    }
`

export default PhotoWrapper;