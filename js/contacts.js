(function () {
    const russianTab = document.getElementById('russianTab');
    const italyTab = document.getElementById('italyTab');
    const russianContent = document.getElementById('contentRussia');
    const italyContent = document.getElementById('contentItaly');

    russianTab.classList.add('active');
    russianContent.classList.remove('hidden');
    showContent(russianTab,russianContent,italyTab,italyContent)
    showContent(italyTab,italyContent,russianTab,russianContent)



    function showMap(city, deleteCityOne){
        const cityBtn = document.getElementById(city);
        const removeStyleBtn = document.getElementById(deleteCityOne);
        cityBtn.addEventListener('click',  () => {
            removeStyleBtn.classList.remove('active');
            cityBtn.classList.add('active');
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