function gramophone(bandName, albumName, songName){
    let duration = (albumName.length * bandName.length) * songName.length / 2;
    let rotations = Math.ceil(duration / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Rammstein', 'Sehnsucht', 'Engel');


///(albumName.length * bandName.length) * song-name.length / 2
//`The plate was rotated ${rotations} times.`