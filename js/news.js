(function () {
    desctopNews();
    mobileNews();

    
    function desctopNews() {
        const arrLinks = [...document.getElementsByClassName('news__link')];
        const arrNews = [...document.getElementsByClassName('news__content-item')];
        showNews(arrLinks,arrNews,'linkNews1','newsContent1');
        showNews(arrLinks,arrNews,'linkNews2','newsContent2');
        showNews(arrLinks,arrNews,'linkNews3','newsContent3');
        showNews(arrLinks,arrNews,'linkNews4','newsContent4');
        showNews(arrLinks,arrNews,'linkNews5','newsContent5');
        showNews(arrLinks,arrNews,'linkNews6','newsContent6');

    }

    function mobileNews() {
        const acc = document.getElementsByClassName("news__mobile-link");
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                const panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    }
    


    function showNews(arrayLinks,arrayNews,linkId, newsId) {
        document.getElementById(linkId).onclick = function () {
            arrayLinks.forEach(link => {
                link.classList.remove('active');
            })
            this.classList.add('active')
            arrayNews.forEach(news => {
                news.classList.remove('show')
                news.classList.add('hidden');
                if (news.id === newsId){
                    news.classList.remove('hidden')
                    news.classList.add('show');
                }
            })
        }
    }



})();