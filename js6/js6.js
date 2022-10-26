function verImagen() {
    let num  = parseInt(document.getElementById("num").value);
    let imagen = document.getElementById('img');

    switch (num) {
        case 1:
            imagen.src = "https://i.etsystatic.com/12862781/r/il/c2a735/2712863669/il_570xN.2712863669_bauu.jpg";
            break;
        case 2:
            imagen.src = "https://i.etsystatic.com/12411233/r/il/cd54ba/2699185867/il_340x270.2699185867_9f0z.jpg";
            break;
        case 3:
            imagen.src = "https://i.etsystatic.com/12411233/r/il/e52432/2652509588/il_570xN.2652509588_qeb1.jpg";
            break;
        case 4:
            imagen.src = "https://i.etsystatic.com/12411233/r/il/563bc5/2651521298/il_570xN.2651521298_axj4.jpg";
            break;
        case 5:
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZf3LZE27U9DBONlY5tSTNZVMWrjwx3IRUPFTOtf8awO-nNNpoBvGIhqcuBggVheTi94&usqp=CAU";
            break;
        default:
            break;
    }
}