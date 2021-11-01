import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({callback}) => {
    return ( 
        <StyledStartButton onClick={clickStart}>
            Start Game
        </StyledStartButton>
     );
}

const clickStart = () => {
    console.log("hhiihi")
}
 
export default StartButton;