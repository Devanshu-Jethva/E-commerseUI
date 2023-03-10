import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:16px;
    font-weight:500;
`


const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on orders over 600 Rs.
        </Container>
    )
}

export default Announcement;