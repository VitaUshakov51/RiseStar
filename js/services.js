(function () {
    const contentTitle = document.getElementById('Content-Title');
    const contentText = document.getElementById('Content-Text');
    const linkTransfer = document.getElementById('linkTransfer');
    const linkYurist = document.getElementById('linkYurist');
    const linkHeatle = document.getElementById('linkHeatle');
    const linkCareer = document.getElementById('linkCareer');
    const linkSpeak = document.getElementById('linkSpeak');
    const linkData = document.getElementById('linkData');
    const tabsBlock = document.getElementById('tabs');

    const transferText = `<p>Наши эксперты по переговорам о трансферах имеют всемирную сеть ключевых лиц, принимающих
                                решения на футбольном рынке</p>
                            <p>Мы имеем все возможности для профессионального управления вашим следующим карьерным
                                шагом, обладая точным знанием рынка и скрупулезным вниманием к деталям. Наш
                                инновационный и проактивный подход гарантирует, что клиенты обеспечат себе выдающиеся
                                переезды и карьерные возможности на высококонкурентном трансферном рынке. Из года в год
                                мы продолжаем повышать уровень количества и качества выполненных переводов.</p>`
    const yuristText = `<p>Юридическая поддержка команды «Rise Star» обеспечивает самые высокие стандарты
                                соответствия и регулирования во всей нашей работе</p>
                            <p>Подход нашего юридического отдела к защите и поддержке наших клиентов и их семей в режиме
                                24/7 обеспечивает немедленное спокойствие благодаря прямой помощи и рекомендациям по
                                целому ряду юридических вопросов, включая контрактное и трудовое право, бытовое право,
                                семейное имущество и другие вопросы. Наша команда также имеет опыт работы в кризисных
                                ситуациях и управлении репутацией, быстро действуя в интересах наших клиентов, чтобы
                                защитить и обеспечить правильную процедуру.</p>`;
    const heatleText = `<p>Внимание к тренировкам, подготовке и восстановлению жизненно важно для обеспечения
                                максимальной физической формы всех элитных спортсменов</p>
                            <p>Мы тщательно подобрали список экспертов для оказания помощи и повышения результативности
                                - от специализированных спортивных терапевтов до частного диетолога, пилатеса,
                                медицинского обслуживания и индивидуального коучинга. Мы придаем первостепенное значение
                                благополучию и психическому здоровью наших клиентов. Мы гарантируем, что доступ к
                                ведущим, подготовленным специалистам возможен в любое время с соблюдением
                                конфиденциальности клиентов.</p>`;
    const careerText = `<p>Подтвержденный послужной список в руководстве элитными талантами: от кандидата в академию
                                до первой команды и полного международного признания</p>
                            <p>Мы обладаем глубоким пониманием ожиданий, ответственности и давления, с которыми
                                сталкиваются молодые таланты и признанные профессионалы. Сочетая знания из первых рук с
                                индивидуальной профориентацией, мы уверенно проводим клиентов и их семьи через годы
                                становления карьеры - от стипендий, first pro, кредитов на развитие до достижения
                                значительного долгосрочного карьерного роста и роста заработной платы</p>`;
    const speakText = `<p>У нас более чем 20 лет опыта работы с контрактами высшего уровня в проведение каждых
                                переговоров и выполняем их с точностью и профессионализмом</p>
                            <p>На протяжении карьеры игровой контракт клиента необходимо будет согласовывать и
                                пересматривать несколько раз. Хотя каждый контракт уникален в своих деталях, наша
                                способность максимизировать положение клиента и потенциал заработка неизменна. Процесс
                                переговоров сложен, и к нему никогда не относятся легкомысленно. Мы опираемся на наш
                                обширный опыт, знание рынка и сеть контактов, чтобы обеспечить правильный результат и
                                наилучшие условия для наших клиентов на каждом уровне</p>`;
    const dataText = `<p>Мы — лидирующая компания в области управления производительностью, вложили значительные
                                средства в аналитику, чтобы помочь клиентам достичь новых высот</p>
                            <p>От подробных статистических данных об играх до индивидуального видеоанализа: штатные
                                аналитики делают все возможное, чтобы помочь клиентам достичь оптимальной
                                производительности. Интерпретация данных жизненно важна для понимания рейтинга и качеств
                                игрока. Будь то в ходе переговоров или при поиске трансферов, мы можем точно
                                продемонстрировать качества наших клиентов и дать уникальным игрокам преимущество перед
                                конкурентами на рынке</p>`;

    addClassList(linkTransfer)
    contentTitle.innerText = 'Трансфер'
    contentText.innerHTML = transferText
    tabsBlock.style.backgroundImage = 'url("images/serv-decor-transf.png")';


    linkYurist.addEventListener('click', function () {
        addClassList(linkYurist)
        removeClassList(linkTransfer)
        removeClassList(linkHeatle)
        removeClassList(linkCareer)
        removeClassList(linkSpeak)
        removeClassList(linkData)
        tabsBlock.style.backgroundImage = 'url("images/yurist.png")';
        contentTitle.innerText = 'Юридические'
        contentText.innerHTML = yuristText;

    })
    linkTransfer.addEventListener('click', function () {
        addClassList(linkTransfer)
        removeClassList(linkYurist)
        removeClassList(linkHeatle)
        removeClassList(linkCareer)
        removeClassList(linkSpeak)
        removeClassList(linkData)
        tabsBlock.style.backgroundImage = 'url("images/serv-decor-transf.png")';
        contentTitle.innerText = 'Трансфер'
        contentText.innerHTML = transferText;

    })
    linkHeatle.addEventListener('click', function () {
        addClassList(linkHeatle)
        removeClassList(linkTransfer)
        removeClassList(linkYurist)
        removeClassList(linkCareer)
        removeClassList(linkSpeak)
        removeClassList(linkData)
        tabsBlock.style.backgroundImage = 'url("images/heatle.png")';
        contentTitle.innerText = 'Здоровье & питание'
        contentText.innerHTML = heatleText;

    })
    linkCareer.addEventListener('click', function () {
        addClassList(linkCareer);
        removeClassList(linkTransfer);
        removeClassList(linkYurist);
        removeClassList(linkHeatle);
        removeClassList(linkSpeak);
        removeClassList(linkData);
        tabsBlock.style.backgroundImage = 'url("images/career.png")';
        contentTitle.innerText = 'Развитие карьеры'
        contentText.innerHTML = careerText;

    })
    linkSpeak.addEventListener('click', function () {
        addClassList(linkSpeak)
        removeClassList(linkTransfer)
        removeClassList(linkYurist)
        removeClassList(linkHeatle)
        removeClassList(linkCareer)
        removeClassList(linkData)
        tabsBlock.style.backgroundImage = 'url("images/speak.png")';
        contentTitle.innerText = 'Переговоры'
        contentText.innerHTML = speakText;

    })
    linkData.addEventListener('click', function () {
        addClassList(linkData)
        removeClassList(linkTransfer)
        removeClassList(linkYurist)
        removeClassList(linkHeatle)
        removeClassList(linkCareer)
        removeClassList(linkSpeak)
        tabsBlock.style.backgroundImage = 'url("images/data.png")';
        contentTitle.innerText = 'Анализ данных & Видео'
        contentText.innerHTML = dataText;

    })


    function addClassList(item) {
        item.classList.add('active');
        item.firstElementChild.classList.add('active');
        item.lastElementChild.classList.add('active');
    }
    function removeClassList(item) {
        item.classList.remove('active');
        item.firstElementChild.classList.remove('active');
        item.lastElementChild.classList.remove('active');
    }
})();
