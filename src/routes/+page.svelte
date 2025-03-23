<script>
    import './style.css'
    export let data;
    let videoList = data.videoList;
    import { onMount } from 'svelte';

    let faqs = [
        {
            q: "~~지역에 ~~번 버스로 따라 만들어도 될까요?",
            a: "네! 물론입니다. 모방(벤치마킹)은 자유입니다!"
        },
        {
            q: "카메라 기종이 무엇인가요?",
            a: "캐논 미러리스 m50 + 15-45mm 씁니다! 휴대폰은 S23+며 주로 4K 24,30fps로 촬영합니다!"
        },
        {
            q: "수익 창출은 안하시나요?",
            a: "수익창출시 저는 모든 영상에 음악 저작권이 걸립니다 ㅠㅠ 따라 수익창출을 하지 않습니다."
        },
    ]

    let items;

    function toggleAccordion(event) {
      const itemToggle = event.target.getAttribute('aria-expanded');

      items.forEach(item => {
        item.setAttribute('aria-expanded', 'false');
      });

      if (itemToggle === 'false') {
        event.target.setAttribute('aria-expanded', 'true');
      }
    }

    onMount(() => {
      items = document.querySelectorAll('.accordion button');
      items.forEach(item => {
        item.addEventListener('click', toggleAccordion);
      });
    });


    let index = 0;
    const slides = [
        "https://cdn.discordapp.com/attachments/1210106158472233014/1353143980174348378/videoframe_6342.png?ex=67e09509&is=67df4389&hm=2d8e933481e2130df3023a62b69a581ce1baac047f7a494f5489ceeba614a0f1&",
        "https://cdn.discordapp.com/attachments/1210106158472233014/1353143978895347712/videoframe_24636.png?ex=67e09508&is=67df4388&hm=03f66bd7b98e47daff8adac90f8cd9427195f21623349e01858e0cf7c2cbe685&",
        "https://cdn.discordapp.com/attachments/1323976278394540082/1352609119218962432/1011.jpg?ex=67dff468&is=67dea2e8&hm=70eb825f7f768c1f7500cee6c73fc2c1290deca02b0fcfe2665f907e77b8cdca&",
        "https://cdn.discordapp.com/attachments/1210106158472233014/1353143977808760902/videoframe_34962.png?ex=67e09508&is=67df4388&hm=e50673639dd6731d8b984944e2545863a05c7cbcf29e354f320c62d7a5a3b0a2&",
        "https://cdn.discordapp.com/attachments/1210106158472233014/1353143976491745290/videoframe_40253.png?ex=67e09508&is=67df4388&hm=3db2636e9d3427a62a7e1408239cddd74007dd155e448089caca38f6449eaee2&",
        "https://cdn.discordapp.com/attachments/1210106158472233014/1353143975074336798/videoframe_77315.png?ex=67e09507&is=67df4387&hm=73c6ca1064730721d668bc4c11b97a58960c402b63e1bf941ff0ec49a5216808&",
        "https://cdn.discordapp.com/attachments/1323976278394540082/1352609106774593578/1006.jpg?ex=67dff465&is=67dea2e5&hm=68fe5de7b58b7a854e546e404492ba6a7eee4cd79bc84590896f056e3bfdf114&",
        "https://cdn.discordapp.com/attachments/1323976278394540082/1352609107118653493/1008.jpg?ex=67dff465&is=67dea2e5&hm=bc9dd488fcd98240d9901881953a9ab8f5b224bc7204f54383496389e4ed4cea&",
        "https://cdn.discordapp.com/attachments/1210106158472233014/1353143973740413029/videoframe_36706.png?ex=67e09507&is=67df4387&hm=60a3bf62e84c58a5591673d7f7bece9b6d189a034b5d10eddc5403ac6092a782&",
        "https://cdn.discordapp.com/attachments/1323976278394540082/1352609120032915509/2000.jpg?ex=67dff468&is=67dea2e8&hm=abd23d4cb341adfa4af744a3c3fd0f8ca320d8859e66402142d13d7d4b732dff&",
        "https://cdn.discordapp.com/attachments/1323976278394540082/1352609120334647306/2029.jpg?ex=67dff468&is=67dea2e8&hm=e21cb18691e54237550955a85b32ced1327e60775a6b7e9713084676063d1310&",
    ];
    const slidesToShow = 3;
    const totalSlides = slides.length;

    function updateSlidePosition() {
        return `translateX(-${(100 / slidesToShow) * index}%)`;
    }

    function nextSlide() {
        if (index < totalSlides - slidesToShow) index++;
    }

    function prevSlide() {
        if (index > 0) index--;
    }
</script>

<svelte:head>
    <title>ChoiJB</title>
</svelte:head>

<main>
    <div class="hero">
        <div class="hero-content">
            <h1 id="title_h1" class="fade-in2s">"대한민국의 모든 버스를 찍는 그 순간까지."</h1>
            <hr>
            <p id="title_p" class="fade-in3s">초이제이비 / ChoiJB</p>
        </div>
    </div>

    <div class="about">
        <p class="about_title_p">A B O U T</p>
        <h1 class="about_title_h1">ChoiJB</h1>

        <div class="slider-container">
            <button class="prev" on:click={prevSlide} disabled={index === 0}>&#10094;</button>
            <div class="slider" style="transform: {updateSlidePosition()}; ">
                {#each slides as slide}
                    <div class="slide"><img src="{slide}" alt="bus"></div>
                {/each}
            </div>
            <button class="next" on:click={nextSlide} disabled={index >= totalSlides - slidesToShow}>&#10095;</button>
        </div>

        <p class="bold about_context_p_title nanum-brush-script-regular">"대한민국의 모든 버스를 찍는 그 순간까지"</p>
        <p class="about_context_p">'ChoiJB'는 부산을 중심으로 전국의 버스를 영상으로 담고 있는 고등학생입니다.</p>
        <p class="about_context_p del">일렉시티 범한 덕후라고 하네요. (전기버스라면 다 좋아한다고..)</p>
        <p class="about_context_p about_context_p_littlebig nanum-brush-script-regular">가장 행복한 순간은 바로 '지금'</p>
        <br>
        <a class="about_context_btn btn_yt" href="https://www.youtube.com/@ChoiJB7771" target="_blank" aria-label="yt" ><i class="fab fa-youtube"></i></a>
        <a class="about_context_btn btn_in" href="https://www.instagram.com/choijb7771/" target="_blank" aria-label="insta"><i class="fab fa-instagram"></i></a>
    </div>

    <div class="about">
        <p class="about_title_p">V I D E O</p>
        <h1 class="about_title_h1">버스 영상</h1>
        <p>가장 최근에 업로드된 4개의 영상 입니다.</p>

        <div class="video-list">
            {#each videoList as video}
                <div class="wrapper">
                    <div class="clash-card barbarian">
                        <div class="clash-card__image clash-card__image--barbarian" style="background-image: url({video.snippet.thumbnails.medium.url});"></div>
                        <div class="clash-card__level clash-card__level--barbarian">{new Date(video.snippet.publishedAt).toLocaleDateString()}</div>
                        <div class="clash-card__unit-name">{video.snippet.title}</div>
                        <div class="clash-card__unit-description">
                            <a class="about_context_btn btn_yt" href="https://www.youtube.com/watch?v={video.snippet.resourceId.videoId}" target="_blank" aria-label="yt" ><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="about">
        <p class="about_title_p">Q & A</p>
        <h1 class="about_title_h1">자주 묻는 질문</h1>

        <div class="faq_container">
            {#each faqs as faq}
                <div class="accordion">
                  <div class="accordion-item">
                    <button id="accordion-button-1" aria-expanded="false"><span class="accordion-title">{faq.q}</span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
            {/each}
        </div>
    </div>
</main>
