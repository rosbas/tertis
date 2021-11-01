import { SimpleGrid ,Box,Button } from "@chakra-ui/react"
import React, { useState, useEffect,useRef } from 'react';

const Matrix2 = () => {
    
    useEffect(() => {
        draw()
    },[])

    let arr = [...Array(200).fill(-1),...Array(10).fill(99)]
    const [matrix,setMatrix] = useState(arr)
    const [gameStatus,setGameStatus] = useState(false)
    const width = 10

    let timerId = null

    //Tetrominoes
    const oTetrimino = [
        [1,2,width+1,width+2],
        [1,2,width+1,width+2],
        [1,2,width+1,width+2],
        [1,2,width+1,width+2]
    ]
    const iTetrimino = [
        [width,width+1,width+2,width+3],
        [2,width+2,2*width+2,3*width+2],
        [2*width,2*width+1,2*width+2,2*width+3],
        [1,width+1,2*width+1,3*width+1]
    ]
    const tTetrimino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,2*width+1],
        [width,width+1,width+2,2*width+1],
        [1,width+1,width,2*width+1],
    ]
    const lTetrimino = [
        [width,width+1,width+2,2],
        [1,width+1,2*width+1,2*width+2],
        [width,width+1,width+2,2*width],
        [0,1,width+1,2*width+1],
    ]
    const jTetrimino = [
        [0,width,width+1,width+2],
        [1,width+1,width*2+1,2],
        [width,width+1,width+2,width*2+2],
        [1,width+1,2*width+1,2*width]
    ]
    const sTetrimino = [
        [1,2,width,width+1],
        [1,width+1,width+2,2*width+2],
        [width+1,width+2,2*width,2*width+1],
        [0,width,width+1,2*width+1],
    ]
    const zTetrimino = [
        [0,1,width+1,width+2],
        [2,width+1,width+2,2*width+1],
        [width,width+1,2*width+1,2*width+2],
        [1,width,width+1,2*width],
    ]



    const Tetrominoes = [oTetrimino,iTetrimino,tTetrimino,lTetrimino,jTetrimino,sTetrimino,zTetrimino]

    const position = useRef(0)
    // let position2 = 0
    const [currentPosition,setCurrentPosition] = useState(0)
    const [currentRotation,setCurrentRotation] = useState(0)

    //select random tetromino

    const randomTetrominoes = () => {
        return Math.floor(Math.random()*Tetrominoes.length)
    }
    const [random,setRandom] = useState(randomTetrominoes())
    let current = Tetrominoes[random][currentRotation]

    //draw tetromino
    const draw = () => {
        let temp = [...matrix]
        // console.log("Draw",currentPosition)
        // console.log("Draw",position)
        current.forEach(i => {
            temp[position.current+i] = random
            // temp[currentPosition+i] = random
        })
        // console.log("Check Temp",temp)
        setMatrix(temp)
        // console.log(matrix)
        // console.log("After",matrix)
    }
    
    const undraw = () => {
        let temp = [...matrix]
        console.log("Check Initial?",temp)
        // console.log("UnDraw",currentPosition)
        current.forEach(i => {
            // temp[currentPosition+i] = -1
            // console.log(i,position.current+i)
            temp[position.current+i] = -1
            // console.log("Check inside",temp)
        })
        console.log("Check Temp",temp)
        setMatrix(temp)
        console.log("Before",matrix)
    }

    // const freeze = () => {
    //     let temp = [...matrix]
    //     current.forEach(o => console.log(o,temp[currentPosition + o + width]))
    //     console.log("Temp",temp)
    //     console.log("Matrix",matrix)
    //     if(current.some(obj => temp[currentPosition + obj + width] > -1)){
    //         // console.log("ForEach?",currentPosition+width)
    //         current.forEach(i => temp[currentPosition + i] = random)
    //         setMatrix(temp)
    //         //start new tetromino
    //         setRandom(randomTetrominoes())
    //         current = Tetrominoes[random][currentRotation]
    //         setCurrentPosition(4)
    //         draw()
    //     }
    // }

    //move down
    const moveDown = () => {
        undraw()
        // let m = currentPosition + width
        // setCurrentPosition(m)
        position.current = position.current + width
        // setTimeout(draw,500)
        draw()
        // freeze()
    }

    const TetriminoColor = (x) => {
        switch (x) {
            case 0:
                return "yellow"
            case 1:
                return "lightblue"
            case 2:
                return "pink"
            case 3:
                return "orange"
            case 4:
                return "indigo"
            case 5:
                return "green"
            case 6:
                return "red"
            case 98:
                return "gray"
            case 99:
                return "black"
            default:
                return "lime"
        }
    }

    const toggleGame = () => {
        console.log("Toggle")
        // timerId = setInterval(moveDown,1000)
        // setGameStatus(!gameStatus)
        // if(gameStatus==true){
        //     timerId = setInterval(moveDown,1000)
        // }
    }

    const addTest = () => {
        moveDown()
    }

    // timerId = setInterval(moveDown,1000)

    return ( 
        <div>
            <h1>Current Game Status: {gameStatus}</h1>
            <SimpleGrid fontSize="x-small" w="200px" h="400px" columns={10}>
                {matrix.map((obj,i) => {
                    return (
                        <Box bg={TetriminoColor(obj)} key={i}>
                            {i}
                        </Box>
                    )}
                )}
            </SimpleGrid>
            <Button onClick={() => toggleGame()} colorScheme="blue">Start/Stop Game</Button>
            <Button onClick={() => addTest()} colorScheme="blue">add Value</Button>
        </div>
     );
}

export default Matrix2;