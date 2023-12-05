(function () {
    const russianTab = document.getElementById('russianTab');
    const italyTab = document.getElementById('italyTab');
    const russianContent = document.getElementById('contentRussia');
    const italyContent = document.getElementById('contentItaly');
    const mapRus = document.getElementById('mapRussia');
    const mapIta = document.getElementById('mapItaly');
    const mobileTabRus = document.getElementById('russianTab')
    const mobileTabIta = document.getElementById('italyTab')

    russianTab.classList.add('active');
    russianContent.classList.remove('hidden');
    mapRus.setAttribute('src','images/moscow-map.png');
    mapIta.setAttribute('src','images/rome-map.png');
    showContent(russianTab,russianContent,italyTab,italyContent)
    showContent(italyTab,italyContent,russianTab,russianContent)

    showMap('moscow','spb', mapRus);
    showMap('spb','moscow',mapRus);
    showMap('rome','milan', mapIta);
    showMap('milan','rome',mapIta);




    function showMap(city, deleteCityOne,map){
        const cityBtn = document.getElementById(city);
        const removeStyleBtn = document.getElementById(deleteCityOne);
        cityBtn.addEventListener('click',  () => {
            removeStyleBtn.classList.remove('active');
            cityBtn.classList.add('active');
            map.setAttribute('src','images/' + city +'-map.png');
        })
    }




    function showContent(tab, show, hiddenTab, hiddenContent) {
        tab.addEventListener('click', function () {
            hiddenTab.classList.remove('active');
            hiddenContent.classList.add('hidden');
            tab.classList.add('active');
            show.classList.remove('hidden');
        })
    }

})();