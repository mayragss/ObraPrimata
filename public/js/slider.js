

function next() {
    const last = document.getElementsByClassName("active")[0].id;
    const current = parseInt(last) == 5 ? 1 : parseInt(last) + 1;

    document.getElementById(last).className = 'hide';
    document.getElementById(current).className = 'embed-container active';
}


function previous() {
    const last = document.getElementsByClassName("active")[0].id;
    const current = parseInt(last) == 1 ? 5 : parseInt(last) - 1;

    document.getElementById(last).className = 'hide';
    document.getElementById(current).className = 'embed-container active';
}