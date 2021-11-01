import { StyledDisplay } from "./styles/StyledDiaplay";

const Display = ({gameOver,text}) => {
    return ( 
        <StyledDisplay gameOver={gameOver}>
            {text}
        </StyledDisplay>
     );
}
 
export default Display;