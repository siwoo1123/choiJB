<script>
    import './style.css'
    import sigumchi2 from '$lib/imgs/jjwa.jpg';
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
            a: "캐논 EOS M50 + 15-45mm 씁니다! 휴대폰은 S25+며 주로 4K 24,30fps로 촬영합니다!"
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
        "https://firebasestorage.googleapis.com/v0/b/nwitter-reloaded-f4e4d.appspot.com/o/videoframe_6342.png?alt=media&token=52feeac4-cdf4-442f-b4c2-18ad0ec2bbbf",
        "https://firebasestorage.googleapis.com/v0/b/nwitter-reloaded-f4e4d.appspot.com/o/videoframe_24636.png?alt=media&token=a597e7a9-d5ab-4829-97e9-76f65d78e216",
        "https://firebasestorage.googleapis.com/v0/b/nwitter-reloaded-f4e4d.appspot.com/o/1011.jpg?alt=media&token=f8d1e29f-bbdf-40ad-84b4-5abc7e7dcd97",
        "https://firebasestorage.googleapis.com/v0/b/nwitter-reloaded-f4e4d.appspot.com/o/videoframe_34962.png?alt=media&token=d3023dd2-102e-4b59-9795-8f8e2d02cd0a",
        "https://firebasestorage.googleapis.com/v0/b/nwitter-reloaded-f4e4d.appspot.com/o/videoframe_40253.png?alt=media&token=0269f1eb-cfb3-4817-a203-33761fbb4773",
        "https://firebasestorage.googleapis.com/v0/b/nwitter-reloaded-f4e4d.appspot.com/o/videoframe_77315.png?alt=media&token=49193c26-f38b-4bad-adc6-9b083c4704ee",
        "https://firebasestorage.googleapis.com/v0/b/nwitter-reloaded-f4e4d.appspot.com/o/1006.jpg?alt=media&token=a7bb4464-9fbd-41d9-89c8-38c3e5a87dc1",
        "https://firebasestorage.googleapis.com/v0/b/nwitter-reloaded-f4e4d.appspot.com/o/1008.jpg?alt=media&token=0e3c4eed-6db4-4ab4-8020-58c49284377f",
        "https://firebasestorage.googleapis.com/v0/b/nwitter-reloaded-f4e4d.appspot.com/o/videoframe_36706.png?alt=media&token=a011098f-910c-4eee-89e1-99ae83596b66",
        "https://firebasestorage.googleapis.com/v0/b/nwitter-reloaded-f4e4d.appspot.com/o/2000.jpg?alt=media&token=ed872965-7c8b-401f-b830-518e2cf6b8f4",
        "https://firebasestorage.googleapis.com/v0/b/nwitter-reloaded-f4e4d.appspot.com/o/2029.jpg?alt=media&token=ac0fd93d-5d9e-4220-af28-86009bd47134",
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
                {#if video && video.snippet && video.snippet.thumbnails && video.snippet.thumbnails.medium}
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
                {/if}
            {/each}
        </div>
    </div>

    <div class="about">
      <p class="about_title_p">C O M M U N I T Y</p>
      <h1 class="about_title_h1">R-BUS</h1>
      <p>「버스 영상」 분야 최초 공식 커뮤니티, 버스 영상과 교통합성 모두 R-BUS에서!</p>
      <br>
      <div>
        <iframe width="480rem" height="270rem" style="border-radius: 2%;" src="https://www.youtube.com/embed/IJ8KwyIBKO0?si=xEB4bhjpPJeiwlPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <br>
      <p>초이제이비의 버스영상 제작소 R-BUS는 <br>대중교통을 좋아하는 사람이라면 누구나 자유롭게 활동할 수 있는 곳 입니다. <br>이용 수칙은 반드시 지켜주시기를 당부 드립니다.</p>
      <br>
      <div id="link">
        <a href="https://cafe.naver.com/rbus" target="_blank" style="background-color: #03c75a;" class="btn">Naver Cafe</a>
        <a href="https://discord.gg/6qxTgPJt" style="background-color: #5865f2;" target="_blank" class="btn">Discord</a>
      </div>
      

    </div>

    <div class="about books">
      <p class="about_title_p">
        <span id="easteregg1">B O O K 2</span>
      </p>
      <h1 class="about_title_h1">나는 버스 덕후입니다</h1>
      
      <div class="book" style="margin-top: 1.5rem;">
        <img class="book_item" style="border-radius: 10%;" width="300rem" height="300rem" src={sigumchi2} alt="book">
        <div class="desc book_item" style="text-align: center;">
          <p><span style="font-weight: bold;">"버스를 왜 찍어요?"</span> <br>
          혹시 길거리에서 버스 사진을 찍는 학생들을 본 적이 있나요? <br>
          이렇게 버스 촬영을 하는 학생들은 바로 '버스 덕후'입니다.</p>
          <br>
          <a href="https://bookk.co.kr/bookStore/694e126e329cdab3239f7a39" class="btn" target="_blank">구매하기</a>
        </div>
      </div>
    </div>

    <div class="about books">
      <p class="about_title_p">B O O K 1</p>
      <h1 class="about_title_h1">첫 책은 항상 박력있게</h1>
      
      <div class="book" style="margin-top: 1.5rem;">
        <img class="book_item" style="border-radius: 10%;" width="300rem" height="300rem" src="https://yt3.ggpht.com/Cbm4YxK3GCNhJIyVGjz9F8eLMgQbSd7BjtTLf1arwR8uHbwoq0Yr6fN0tLUxm9AFiokIyMfx0bL9bg=s1600-c-fcrop64=1,000037efffffc810-rw-nd-v1" alt="book">
        <div class="desc book_item" style="text-align: center;">
          <p>첫 책 입니다. <br>
            버스 동호인들이 겪는 에피소드나 재미있는 이야기들과 <br>
            버스 기사를 꿈꾸고 있는 저의 고등학교시절의 이야기를 담았습니다. <br>
            꼭 만화책처럼 읽어주시길 바랍니다.</p>
          <br>
          <a href="https://bookk.co.kr/bookStore/678f822449cca2dd779678f4" class="btn" target="_blank">구매하기</a>
        </div>
      </div>
    </div>

    <div class="about">
        <p class="about_title_p">F A Q</p>
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
