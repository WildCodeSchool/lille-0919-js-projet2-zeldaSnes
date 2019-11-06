const tileNames = {                 /* v = vegetal, w = water, g = ground, b = buildings, o = objects Z = can't get in*/
    'w001Z': 'water',
    'w002Z': 'waterBorderTop',
    'w003': 'waterBorderBottom',
    'w004Z': 'waterBorderLeft',
    'w005Z': 'waterBorderRight',
    'w006Z': 'waterBorderTopRightCorner',
    'w007': 'waterBorderBottomLeftCorner',
    'v001': 'grass',
    'v002': 'highGrass',
    'v003': 'flowers',
    'v004': 'bush',
    'v005': '',
    'v006': '',
    'v007': '',
    'v008': '',
    'v009': '',
    'v010Z': 'redTreeTopLeftCorner',
    'v011Z': 'redTreeTopRightCorner',
    'v012Z': 'redTreeMiddleLeftCorner',
    'v013Z': 'redTreeMiddleRightCorner',
    'v014Z': 'redTreeBottomLeftCorner',
    'v015Z': 'redTreeBottomRightCorner',
    'v016Z': 'greenTreeTopLeftCorner',
    'v017Z': 'greenTreeTopRightCorner',
    'v018Z': 'greenTreeMiddleLeftCorner',
    'v019Z': 'greenTreeMiddleRightCorner',
    'v020Z': 'greenTreeBottomLeftCorner',
    'v021Z': 'greenTreeBottomRightCorner',
    'v022Z': 'yellowTreeTopLeftCorner',
    'v023Z': 'yellowTreeTopRightCorner',
    'v024Z': 'yellowTreeMiddleLeftCorner',
    'v025Z': 'yellowTreeMiddleRightCorner',
    'v026Z': 'yellowTreeBottomLeftCorner',
    'v027Z': 'yellowTreeBottomRightCorner',
    'g001': 'cliffTop',
    'g002Z': 'cliffBottom',
    'g003': 'cliffTopLeftCorner',
    'g004': 'cliffTopRightCorner',
    'g005Z': 'cliffBottomLeftCorner',
    'g006Z': 'cliffBottomRightCorner',
    'g007': 'pathHorizontal',
    'g008': 'pathVertical',
    'g009': 'pathTopLeftCorner',
    'g010': 'pathTopRightCorner',
    'g011': 'pathBottomLeftCorner',
    'g012': 'pathBottomRightCorner',
    'g013': 'pathCrossTop',
    'g014': 'pathCrossBottom',
    'b001Z': 'houseTopLeftCorner',
    'b002Z': 'houseTopMiddleCorner',
    'b003Z': 'houseTopRightCorner',
    'b004Z': 'houseMiddleLeftCorner',
    'b005': 'houseMiddleMiddleMiddle',
    'b006Z': 'houseMiddleRightCorner',
    'b007': 'houseBottomLeftCorner',
    'b008': 'houseBottomMiddleCorner',
    'b009': 'houseBottomRightCorner',
    'b010': 'bridgeTopLeftCorner',
    'b011': 'bridgeTopRightCorner',
    'b012': 'bridgeMiddleLeftCorner',
    'b013': 'bridgeMiddleRightCorner',
    'b014Z': 'bridgeBottomLeftCorner',
    'b015Z': 'bridgeBottomRightCorner',
    'b016Z': 'fenceBush',
    'b017Z': 'fenceBushUp',
    'b018Z': 'fenceBushTopLeft',
    'b019Z': 'fenceBushTopRight',
    'b020Z': 'fenceBushBottomLeft',
    'b021Z': 'fenceBushBottomRight',
    'b022Z': 'fenceBushBorderLeft',
    'b023Z': 'fenceBushBorderRight',
    'o001': 'floorSword',
    'o002Z': 'sign'
}


const tilesMap = [
    ['g001', 'g001', 'g001', 'g001', 'g001', 'g001', 'g001', 'g001', 'g001', 'g001', 'g001', 'g003', 'w004Z', 'w005Z', 'g004', 'g001', 'g001', 'g001', 'g001', 'g001'],
    ['b016Z', 'b016Z', 'b016Z', 'b016Z', 'b016Z', 'b016Z', 'b016Z', 'b016Z', 'b016Z', 'b019Z', 'v001', 'v001', 'w004Z', 'w005Z', 'v001', 'v001', 'v010Z', 'v011Z', 'v010Z', 'v011Z'],
    ['v016Z', 'v017Z', 'b001Z', 'b002Z', 'b003Z', 'v004', 'v004', 'v004', 'v004', 'b017Z', 'v001', 'v001', 'w004Z', 'w005Z', 'v001', 'v001', 'v012Z', 'v013Z', 'v012Z', 'v013Z'],
    ['v018Z', 'v019Z', 'b004Z', 'b005', 'b006Z', 'v004', 'o001', 'o002Z', 'v004', 'b017Z', 'v001', 'v001', 'b010', 'b011', 'v001', 'v001', 'v014Z', 'v015Z', 'v014Z', 'v015Z'],
    ['v020Z', 'v021Z', 'b007', 'b008', 'b009', 'v004', 'v001', 'v001', 'v004', 'b017Z', 'g009', 'g007', 'b012', 'b013', 'g007', 'g007', 'g007', 'g007', 'g007', 'g007'],
    ['v001', 'v001', 'v001', 'g008', 'v001', 'v001', 'v001', 'v001', 'v001', 'b017Z', 'g008', 'v001', 'b014Z', 'b015Z', 'v001', 'v001', 'v004', 'v004', 'v004', 'v004'],
    ['b020Z', 'b016Z', 'b022Z', 'g008', 'b023Z', 'b016Z', 'b016Z', 'b016Z', 'b016Z', 'b021Z', 'g008', 'v001', 'w004Z', 'w005Z', 'v001', 'v001', 'v010Z', 'v011Z', 'v010Z', 'v011Z'],
    ['v001', 'v001', 'o002Z', 'g011', 'g007', 'g014', 'g007', 'g007', 'g007', 'g007', 'g012', 'v001', 'w004Z', 'w005Z', 'v001', 'v001', 'v012Z', 'v013Z', 'v012Z', 'v013Z'],
    ['v001', 'v001', 'v001', 'v001', 'v001', 'g008', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'w004Z', 'w005Z', 'v001', 'v001', 'v014Z', 'v015Z', 'v014Z', 'v015Z'],
    ['v001', 'v001', 'v010Z', 'v011Z', 'v001', 'g008', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'w004Z', 'w006Z', 'w002Z', 'w002Z', 'w002Z', 'w002Z', 'w002Z', 'w002Z'],
    ['v001', 'v001', 'v012Z', 'v013Z', 'v001', 'g008', 'v001', 'v010Z', 'v011Z', 'v001', 'v001', 'v001', 'w007', 'w003', 'w003', 'w003', 'w003', 'w003', 'w003', 'w003'],
    ['v001', 'v001', 'v014Z', 'v015Z', 'v002', 'g008', 'v001', 'v012Z', 'v013Z', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v016Z', 'v017Z', 'v001', 'v001', 'v001'],
    ['v001', 'v001', 'v001', 'v001', 'v001', 'g008', 'v001', 'v014Z', 'v015Z', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v018Z', 'v019Z', 'v001', 'v001', 'v001'],
    ['v001', 'v001', 'v001', 'v001', 'v001', 'g008', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v020Z', 'v021Z', 'v001', 'v001', 'v001'],
    ['g002Z', 'g002Z', 'g002Z', 'g002Z', 'g005Z', 'g008', 'g006Z', 'g002Z', 'g002Z', 'g002Z', 'g002Z', 'g002Z', 'g002Z', 'g002Z', 'g002Z', 'g002Z', 'g002Z', 'g002Z', 'g002Z', 'g002Z'],
];

const tilesMap2 = [
    ['g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'v001', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'b005', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z'],
    ['g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z', 'g005Z'],
];


export { tileNames, tilesMap, tilesMap2 }
