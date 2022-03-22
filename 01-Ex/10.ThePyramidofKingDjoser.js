function ThePyramidofKingDjoser(side, step) {
    let stone = 0;
    let temp = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 1;
    while (true) {
        if (side > 2) {
            temp += (side - 2) * (side - 2) * step;
            if (height % 5 == 0) {
                lapis += (side * side - temp / step) * step;
            } else {
                marble += (side * side - temp / step) * step;
            }
            stone += temp;
            temp = 0;
            side -= 2;
            height++;
        }else{
            gold += side * side * step;
            break;
        }
    }
    console.log("Stone required:", Math.ceil(stone));
    console.log("Marble required:", Math.ceil(marble));
    console.log("Lapis Lazuli required:", Math.ceil(lapis));
    console.log("Gold required:", Math.ceil(gold));
    console.log("Final pyramid height:", Math.floor(height * step ));

}
ThePyramidofKingDjoser(11, 0.75);

