import { SimpleGrid ,Box,Button } from "@chakra-ui/react"
import React, { useState, useEffect } from 'react';
import { TETROMINOS } from "../src/tetrominos";

import { StyledCell } from "./styles/StyledCell";

const Cell = ({type}) => {
    // let c = TETROMINOS['L'].color
    let c = TETROMINOS[type].color
    return ( 
        // <Box type={type} bg={`rgba(${TETROMINOS[type].color},0.8)`}
        // <Box type={'L'} bg={`rgba(${c},0.8)`}
        // width="auto"
        // border={type===0?'0px solid':'4px solid'}
        // borderBottomColor={`rgba(${c},0.1)`}
        // borderRightColor={`rgba(${c},1)`}
        // borderTopColor={`rgba(${c},1)`}
        // borderLeftColor={`rgba(${c},0.3)`}
        // >
        //     cell
        // </Box>
        <StyledCell type={type} color={c} />
        // <StyledCell type={'L'} color={c} />
     );
}
 
export default Cell;