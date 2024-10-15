// unfortunately due to webgl this does not work

canvas = document.getElementById('glslCanvas');


function create_download_button() {
    download = document.createElement('a');

    download.href = canvas.toDataURL('image/jpeg', 1.0);
    download.download = 'out.jpeg';
    download.innerText = 'Download';

    document.body.appendChild(download);

    canvas.removeEventListener("click", create_download_button)
}


canvas.addEventListener("click", create_download_button);