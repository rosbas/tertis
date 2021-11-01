import Cell from "./Cell";
import { Grid, GridItem } from "@chakra-ui/layout";

import { StyledStage } from "./styles/StyledStage";

const Stage = ({stage}) => {
    let w = stage[0].length
    let h = stage.length
    return ( 
        // <Grid gridTemplateRows={`repeat(${h},calc(25vw/${w}))`}
        // gridTemplateColumns={`repeat(${w},1fr)`} gap="1px" border="2px solid"
        // borderColor="#333"
        // width="100%"
        // maxW="25vw"
        // background="#111"
        // >
        //     {stage.map(row => row.map((cell,x) => 
        //         <Cell key={x} type={cell[0]}/>
        //     ))}
        // </Grid>

        <StyledStage width={w} height={h}>
            {stage.map(row => row.map((cell,x) => 
                 <Cell key={x} type={cell[0]}/>
            ))}
        </StyledStage>
        // <div>
        //     {stage.map(row => row.map((cell,x) => 
        //         <Cell key={x} type={cell[0]}/>
        //     ))}
        // </div>
     );
}
 
export default Stage;