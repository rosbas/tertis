import { createStage } from '../src/gameHelpers';
import dynamic from 'next/dynamic'

//Style
import { Box, Image } from "@chakra-ui/layout";

//Components
import Stage from './Stage'
import Display from './Display';
import StartButton from './StartButton';

//Images
import { StyledTetrisWrapper,StyledTetris } from './styles/StyledTertis';

const BgImage = dynamic(() => import("./styles/BGImage"),{
    ssr: false
})

const Tertis = () => {
    return ( 
        <>
        <StyledTetrisWrapper>
            <StyledTetris>
                {/* <Image src={`url(${bgImage}) #000`}/> */}
                <Stage stage={createStage()}/>
                <aside>
                    <div>
                        <Display text="Score"/>
                        <Display text="Rows"/>
                        <Display text="Level"/>
                    </div>
                    <StartButton/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
        <BgImage/>
        </>
     );
}
 
export default Tertis;