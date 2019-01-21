const resultData = window.dataLol(window.data);

for (let i = 0; i < resultData.length; i++) {
    document.getElementById('root').innerHTML += '<button id="btn_' + resultData[i].name + '"><img src="' + resultData[i].img + '"><p>' + resultData[i].name + '</p></button>';
}

const newLocal = false;
window.addEventListener('load', funcion, newLocal);

function funcion() {
    var but = document.getElementById('topnav').getElementsByTagName('button');
    for (i = 0; i < but.length; i++) {
        but[i].addEventListener('click', show);
    }
}
function show(event) {
    event.preventDefault();
    document.getElementById('root').innerHTML = " ";
    let data = window.dataLol(window.data);
    let condition;
    let resultData;
    //según sea el botón que se ha pulsado
    switch (this.id) {
        case "btn_tank":
            condition = 'Tank';
            resultData = window.filterData(data, condition);
            break;
        case "btn_fighter":
            condition = 'Fighter';
            resultData = window.filterData(data, condition);
            break;
        case "btn_mage":
            condition = 'Mage';
            resultData = window.filterData(data, condition);
            break;
        case "btn_assassin":
            condition = 'Assassin';
            resultData = window.filterData(data, condition);
            break;
        case "btn_support":
            condition = 'Support';
            resultData = window.filterData(data, condition);
            break;
        case "btn_marksman":
            condition = 'Marksman';
            resultData = window.filterData(data, condition);
            break;
        case "btn_search":
            condition = document.getElementById('search').value;
            resultData = window.dataSearch(data, condition);
            break;
        case "btn_asc":
            condition = 'Asc';
            resultData = window.sortData(data, condition);
            break;
        case "btn_desc":
            condition = 'Desc';
            resultData = window.sortData(data, condition);
            break;
    }
    for (let i = 0; i < resultData.length; i++) {
        document.getElementById('root').innerHTML += '<button id="btn_' + resultData[i].name + '"><img src="' + resultData[i].img + '"><p>' + resultData[i].name + '</p></button>';
    }
    for (let i = 0; i < resultData.length; i++) {
        document.getElementById('btn_' + resultData[i].name + '').addEventListener('click', (event) => {
            event.preventDefault();
            let modal = document.getElementById('modal');
            modal.style.display = "block";
            resultDataInfo = window.dataInfo(data);
            document.getElementById('modal').innerHTML =
                '<div class="modal_content" style="background-image: url(' + resultData[i].splash + ');" >' +
                '<span class="close">&times;</span>' +
                '<div class="info">' +
                '<h1>' + resultData[i].name + '</h1>' +
                '<h3>' + resultData[i].title + '</h3>' +
                '<p>' + resultData[i].blurb + '</p>' +
                '<p id="tag">' + "Tag: " + resultData[i].tags + '</p>' +
                '<br>Attack<meter min="0" low="4" value="' + resultDataInfo[i].attack + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Defense <meter min="0" low="4" value="' + resultDataInfo[i].defense + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Mage <meter min="0" low="4" value="' + resultDataInfo[i].magic + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Difficulty <meter min="0" low="4" value="' + resultDataInfo[i].difficulty + '" high="6" max="10" optimum= "10"></meter><br>' +
                '</div>' +
                '</div>' 
            const span = document.getElementsByClassName("close")[0];
            span.onclick = function () {
                modal.style.display = "none";
            }
    
        })
    }
}

for (let i = 0; i < resultData.length; i++) {
    document.getElementById('btn_' + resultData[i].name + '').addEventListener('click', (event) => {
        event.preventDefault();
        let modal = document.getElementById('modal');
        modal.style.display = "block";
        resultDataInfo = window.dataInfo(data);
        document.getElementById('modal').innerHTML =
        '<div class="modal_content" style="background-image: url(' + resultData[i].splash + '); width: 80%; background-size: 100%;background-repeat: no-repeat;" >' +
        '<span class="close">&times;</span>' +
        '<div class="info">' +
        '<h1>' + resultData[i].name + '</h1>' +
        '<h3>' + resultData[i].title + '</h3>' +
        '<p>' + resultData[i].blurb + '</p>' +
        '<p id="tag">' + "Tag: " + resultData[i].tags + '</p>' +
        '<p id="tag">' + "Tag: " + resultData[i].tags + '</p>' +
                '<br>Attack<meter min="0" low="4" value="' + resultDataInfo[i].attack + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Defense <meter min="0" low="4" value="' + resultDataInfo[i].defense + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Mage <meter min="0" low="4" value="' + resultDataInfo[i].magic + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Difficulty <meter min="0" low="4" value="' + resultDataInfo[i].difficulty + '" high="6" max="10" optimum= "10"></meter><br>' +
        '</div>' 
        '</div>' 
        const span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modal.style.display = "none";
        }

    })
}