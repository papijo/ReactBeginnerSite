import styled from "styled-components"
import App from '../img/app.png'
import AnimatedShapes from "./AnimatedShapes"

const Container = styled.div`
    display: flex;
    @media only screen and (max-width: 480px){
        flex-direction: column;
        padding: 30px 20px;
    }
`

const Image = styled.img`
    width: 80%;
`
const Left = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px){
        display: none;
    }
`
const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    @media only screen and (max-width: 480px){
        width: 100%;
    }
`

const Title = styled.div`
    font-size: 70px;
    @media only screen and (max-width: 480px){
        font-size: 50px;
    }
`

const SubTitle =  styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
`

const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`

const Button = styled.button`
    width: 150px;
    border: none;
    padding: 15px 20px;
    background-color: #191970;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
`


const Feature = () => {
    return (
        <Container>
            <Left><Image src={App} /></Left>
            <Right>
                <Title>
                    <b>Good</b> Design <br/>
                    <b>Good</b> Business
                </Title>
                <SubTitle>
                    We know that good design means good business.
                </SubTitle>
                <Desc>
                    We help our clients succeed by creating brand identities, digital experiences
                    and print materials that communicate clearly, achieve marketing goals and look
                    fantastic.
                </Desc>
                <Desc>
                   We care about your business and guarantee that our expertise would enable you achieve your marketing goals. 
                </Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Feature
