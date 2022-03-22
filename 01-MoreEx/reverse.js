function reverse(x1, y1, x2, y2){
    let dist = Math.sqrt(Math.pow((y1 - y2), 2) + Math.pow((x1 - x2), 2));
    console.log(dist);
}
reverse(2, 4, 5, 0)