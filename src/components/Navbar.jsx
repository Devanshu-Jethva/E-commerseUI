import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { mobile } from "../responsive";


const Container = styled.div`
    height: 80px;
    color: white;
    background-color: #222831;
    ${mobile({ height: "70px" })}
`;

const Wrapper = styled.div`
    height: 80px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    ${mobile({ height: "70px" })}
    ${mobile({ padding: "0px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center ;
    
`;

const Languages = styled.div`
    font-size: 14px;
    cursor:pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid black;
    display: flex;
    align-items: center ;
    margin-left:25px;
    padding:5px;
    background-color: white;
`

const Input = styled.input`
    border:none;
    ${mobile({ width: "50px" })}
`

const Center = styled.div`
    flex: 1;
`;
const Logo = styled.h1`
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    ${mobile({ fontSize: "16px" })}
`

const Right = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ justifyContent: "center", flex: "2" })}
`;

const MenuItem = styled.div`
    cursor: pointer;
    font-size: 14px;
    margin-left:30px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Languages>
                        EN
                    </Languages>
                    <SearchContainer >
                        <Input placeholder="Search" />
                        <SearchIcon style={{ color: "gray", fontSize: 20 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo >
                        Simply Shop
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;