import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: while;
    flex-direction: column;
    background-color: #E3FDFD;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Desc = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`;

const Input = styled.input`
    border: none;
    flex: 9;
    padding-left: 20px;
    font-size: 15px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #393E46;
    color: white;
    ${mobile({ flex: "2" })}
`;


const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter;