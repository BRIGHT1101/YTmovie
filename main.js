chart = document.querySelector(".currentChart");
will = document.querySelector(".nextChart");
mainMovie = document.querySelector(".mainMovie");
movieDes = document.querySelector(".movieDescription");
ticketing = document.querySelector('.ticketing');
selectedMovie = document.querySelector('.selectedMovie');
ticket = document.querySelector('.ticket');
main = document.querySelector('main');
selectNum = document.querySelector('.selectNum');
seatNumber = document.querySelector('.seatNumber')



chart.onclick = () => {
    fetch('chart').then(function(response){
        response.text().then(function(text){
        document.querySelector('main').innerHTML = text;
        })
    });
    main.style.display = 'block'
    ticket.style.display = 'none'
}

will.onclick = () => {
    fetch('next').then(function(response){
        response.text().then(function(text){
            document.querySelector('main').innerHTML = text;
        })
    });
    main.style.display = 'block'
    ticket.style.display = 'none'
}

count = Math.round(Math.random()*4+1)
bglist = {
    1: ['아저씨', 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000039/39142/39142_320.jpg','2021.08.25'],
    2: ['레미니센스', 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000084/84830/84830_320.jpg', '2021.08.25'],
    3: ['드림걸즈', 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000084/84810/84810_320.jpg','2021.08.26'],
    4: ['스네이크 아이즈','https://img.cgv.co.kr/Movie/Thumbnail/Poster/000084/84789/84789_320.jpg','2021.08'],
    5: ['제주, 힐링 트립', 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000084/84784/84784_320.jpg','2021.09.05']
}

mainMovie.innerHTML += `<img src='${bglist[count][1]}'>`
movieDes.innerHTML = `${bglist[count][0]}<br>
${bglist[count][2]}<br>
<input 
type="button" value="예매하기" id="ticketing2">
`
ticketing.onclick = () => {
    ticket.style.display = 'flex';
    main.style.display = 'none'
}

ticketing2.onclick = () => {
    ticket.style.display = 'flex';
    main.style.display = 'none'
}


mainMovie.onclick = () => {
    movieDes.classList.toggle('detail');
    mainMovie.classList.toggle('detail')
}

selecting.onchange =  ()=> {
    smovie.innerText = `"${selecting.options[selecting.selectedIndex].value}"` 
}

selectedDate.onchange = (e)=>{
    if (selectedDate.valueAsDate > new Date()) {
        sdate.innerText = selectedDate.value
    } else {
        alert('익일부터 예매 가능합니다')
    }

}

selectNum.onclick = () => {
    if (smovie.innerText == '') {
        alert('영화를 선택해주세요')
    }
    else if(sdate.innerText == '') {
        alert('날짜를 선택해주세요')
    }
    else {
        seatNumber.style.display ='block'
        selectNum.style.display = 'none'
    }
    
}
xx = new Set()
seatNumber.onclick = (e) => {
    gg = ''
    if (e.target.tagName == 'LI' ) {
        e.target.classList.toggle('sel');
        if (e.target.className == 'sel') {
            xx.add(e.target.innerText)
        } else {
            xx.delete(e.target.innerText)
        }
        for (let a of xx) {
            gg += a + ' '
        }
        sseat.innerText = `${gg}`
        money.innerText = `총 ${12000*xx.size}원`
    }
    subbutton.style.display = 'flex'
}

sub.onclick = () => {
    selectedMovie.style.display="none"
}

subbutton.onclick = () => {
    if (xx.size == 0) {
        alert('좌석을 선택해주세요!')
    } else {
        selectedMovie.style.display = 'block'
    }
    
}