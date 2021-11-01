export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
// const STAGE_WIDTH = 12
// const STAGE_HEIGHT = 20

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0,'clear'])
    )
 
// export default createStage;