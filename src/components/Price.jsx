import styled from "styled-components"
import PriceCard from "./PriceCard"

const Container = styled.div`
    height: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px){
        flex-direction: column;
    }

`


const Price = () => {
    return (
        <Container>
            <PriceCard price = "10,000" type="Basic" />
            <PriceCard price = "25,000" type="Premium"/>
            <PriceCard price = "100,000" type="Advanced"/>
        </Container>
    )
}

export default Price
