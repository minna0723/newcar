/* 모바일구간 메뉴 */
document.querySelector('.mo_header_btn').addEventListener('click',function (){
    document.querySelector('.mo_menu').classList.add('active');
    document.querySelector('.mo_menu_bg').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
});
document.querySelector('.mo_close_btn').addEventListener('click',function (){
    document.querySelector('.mo_menu').classList.remove('active');
    document.querySelector('.mo_menu_bg').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
});

document.querySelector('.mo_list li:nth-child(7) a').addEventListener('click',function (){
    document.querySelector('.mo_sublist').classList.toggle('active');
    document.querySelector('.mo_list li a i').classList.toggle('active');
});

/* 퀵메뉴 */
document.querySelector('.quick_top_btn').addEventListener('click',function (){
    window.scrollTo({top:0, behavior:'smooth'});
});

/* 공통폼 */
let carLocation = {
    ko : "국 산",
    global : "수 입"
}
let carMake = {
    ko: ["제조사를 선택해주세요","쌍용","쉐보레","르노코리아"],
    global: ["제조사를 선택해주세요","캐딜락","포드","볼보"]
}
let CarVehicle = {
    "제조사를 선택해주세요" :["차량을 선택해주세요"],
    쌍용 : ["차량을 선택해주세요","렉스턴","코란도","티볼리"],
    쉐보레 : ["차량을 선택해주세요","트레일블레이저","트렉스","트래버스"],
    르노코리아 : ["차량을 선택해주세요","SM6","CAPTUR","뉴 마스터"],
    캐딜락 : ["차량을 선택해주세요","Escalade","XT6","XT5"],
    포드 : ["차량을 선택해주세요","Mustang","Bronco","Ranger"],
    볼보 : ["차량을 선택해주세요","XC40 Recharge","XC90","XC60"],
}
let carOption = {
    "차량을 선택해주세요" :["차종을 선택해주세요"],
    렉스턴:["차종을 선택해주세요","4wd 상품성강화"],
    코란도:["차종을 선택해주세요","디젤 AWD"],
    티볼리:["차종을 선택해주세요","가솔린 2.3"],
    트레일블레이저:["차종을 선택해주세요","E-TURBO"],
    트렉스:["차종을 선택해주세요","가솔린"],
    트래버스:["차종을 선택해주세요","3.6 가솔린 AWD"],
    SM6:["차종을 선택해주세요","TCe 300"],
    CAPTUR:["차종을 선택해주세요","TCe260 가솔린"],
    "뉴 마스터":["차종을 선택해주세요","버스 2020년형"],
    Escalade:["차종을 선택해주세요","가솔린6.2 [2021년형]"],
    XT6:["차종을 선택해주세요","가솔린3.6 [2021년형]"],
    XT5:["차종을 선택해주세요","가솔린3.6 [2021년형]"],
    Mustang:["차종을 선택해주세요","가솔린 2.3 쿠페"],
    Bronco:["차종을 선택해주세요","가솔린 2.7"],
    XC40:["차종을 선택해주세요","디젤 2.0"],
    "XC40 Recharge":["차종을 선택해주세요","전기[2022년형]"],
    XC90:["차종을 선택해주세요","가솔린 2.0 MHEV"],
    XC60:["차종을 선택해주세요","가솔린 2.1 MHEV"],
}
let carModel = {
    "차종을 선택해주세요" :["모델을 선택해주세요"],
    "4wd 상품성강화":["모델을 선택해주세요","7인승 더블랙","7인승 마스터"],
    "디젤 AWD":["모델을 선택해주세요","C7","R-PLUS"],
    "가솔린 2.3":["모델을 선택해주세요","4WD V3","2Wd V3"],
    "E-TURBO":["모델을 선택해주세요","RS 1.35 AWD","Premiere 1.35 AWD"],
    "가솔린":["모델을 선택해주세요","LT 코어","LT"],
    "3.6 가솔린 AWD":["모델을 선택해주세요","RS","Redline"],
    "TCe 300":["모델을 선택해주세요","LE","SE Plus"],
    "TCe260 가솔린":["모델을 선택해주세요","EDITIONPARIS","INTENS"],
    "버스 2020년형":["모델을 선택해주세요","15인승 M/T"],
    "가솔린6.2 [2021년형]":["모델을 선택해주세요","Premium Luxury Platinum"],
    "가솔린3.6 [2021년형]":["모델을 선택해주세요","4WD Sport"],
    "가솔린3.7 [2021년형]":["모델을 선택해주세요","Premium Luxury"],
    "가솔린 2.3 쿠페":["모델을 선택해주세요","Eco Boost Premium"],
    "가솔린 2.7":["모델을 선택해주세요","4 Door Outer Banks"],
    "디젤 2.0":["모델을 선택해주세요","B4 Momentum AWD"],
    "전기[2022년형]":["모델을 선택해주세요","Twin Ultimate AWD"],
    "가솔린 2.0 MHEV":["모델을 선택해주세요","B6 Momentum AWD"],
    "가솔린 2.1 MHEV":["모델을 선택해주세요","B5 Momentum AWD"]
}

let optList = [];
for(locationKey in carLocation){
    //console.log("key:"+locationKey+", value:" + carLocation[locationKey]);
    optList.push('<li data-index="'+locationKey+'"><a href="javascript:">' + carLocation[locationKey] + '</a></li>')
}
document.querySelector('.car_location').innerHTML = optList.join("");// section2
document.querySelector('.car_location1').innerHTML = optList.join("");// section6

function fn_vehicle(key){
    let optList_b = [];
    for(vehicleKey in CarVehicle[key]){
        optList_b.push('<option value="'+CarVehicle[key][vehicleKey]+'">'+CarVehicle[key][vehicleKey]+'</option>')
    }
    document.getElementById('car_vehicle').innerHTML = optList_b;// section2
    document.getElementById('car_vehicle1').innerHTML = optList_b;// section6

}

function fn_option(key){
    let optList_c = [];
    for(optionKey in carOption[key]){
        optList_c.push('<option value="'+carOption[key][optionKey]+'">'+carOption[key][optionKey]+'</option>')
    }
    document.getElementById('car_option').innerHTML = optList_c;// section2
    document.getElementById('car_option1').innerHTML = optList_c;// section6

}

function fn_model(key){
    let optList_d = [];
    for(modelKey in carModel[key]){
        optList_d.push('<option value="'+carModel[key][modelKey]+'">'+carModel[key][modelKey]+'</option>')
    }
    document.getElementById('car_model').innerHTML = optList_d;// section2
    document.getElementById('car_model1').innerHTML = optList_d;// section6

}

let resetFun = function (id,title){
    document.getElementById(id).innerHTML = '<option value="">'+ title +' 선택해주세요</option>';
}

// section2
let tabList = document.querySelectorAll(".car_location li")
tabList.forEach(function (value,index){
    if(index === 0){
        value.classList.add('active');
    }
    value.addEventListener('click',function (){
        document.querySelector(".car_location li.active").classList.remove('active');
        this.classList.add('active');
        let selectIdx = this.getAttribute('data-index');
        let carBrand = carMake[selectIdx];
        let optList_a = [];
        for(makeKey in carBrand){
            optList_a.push('<option value="'+carBrand[makeKey]+'">'+carBrand[makeKey]+'</option>')
        }
        document.getElementById('car_make').innerHTML = optList_a;
        resetFun("car_vehicle","차량을");
        resetFun("car_option","차종을");
        resetFun("car_model","모델을");

    });
});
document.querySelector(".car_location li.active").click();

// section6
let tabList1 = document.querySelectorAll(".car_location1 li")
tabList1.forEach(function (value,index){
    if(index === 0){
        value.classList.add('active');
    }
    value.addEventListener('click',function (){
        document.querySelector(".car_location1 li.active").classList.remove('active');
        this.classList.add('active');
        let selectIdx = this.getAttribute('data-index');
        let carBrand = carMake[selectIdx];
        let optList_a = [];
        for(makeKey in carBrand){
            optList_a.push('<option value="'+carBrand[makeKey]+'">'+carBrand[makeKey]+'</option>')
        }
        document.getElementById('car_make1').innerHTML = optList_a;
        resetFun("car_vehicle","차량을");
        resetFun("car_option","차종을");
        resetFun("car_model","모델을");

    });
});
document.querySelector(".car_location1 li.active").click();

/* 프로모션 특가 */
var swiper = new Swiper(".promotion_swiper", {
    slidesPerView: 1,
    spaceBetween: 21,
    navigation: {
        nextEl: ".promotion-button-next",
        prevEl: ".promotion-button-prev",
    },
    breakpoints: {
        992 :{
            slidesPerView :3,
        },
        768 :{
            slidesPerView :2,
        },
        576 :{
            slidesPerView :2,
            spaceBetween: 10,
        },
    }
});

/* 실시간 견적 신청 현황 */
var swiper = new Swiper(".realtime_swiper", {
    direction: "vertical",
    loop:true,
    slidesPerView: 6,
    spaceBetween: 20,
    debugger:false,
    mouseWheel:false,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
});

/* 간편 견적 상담 신청 */
let easy_tab = document.querySelectorAll('.rent_auto_form ul li');
easy_tab.forEach(function (el,idx){
    el.addEventListener('click',function (){
        document.querySelector('.rent_auto_form ul li.active').classList.remove('active');
        this.classList.add('active');

        if(idx === 0){
            document.querySelector('.rent_form_wrap').style.display = 'block';
            document.querySelector('.lis_form_wrap').style.display = 'none';
        }else if(idx === 1){
            document.querySelector('.rent_form_wrap').style.display = 'none';
            document.querySelector('.lis_form_wrap').style.display = 'block';
        }
    });
});

/* 즉시출고차량 더보기*/
let quickmore_plusBTN = document.querySelector('.section5 .more_btn_box .plus_btn');
let quickmore_minusBTN = document.querySelector('.section5 .more_btn_box .minus_btn');
let quickBox_height = document.querySelector('.quick_box');

quickmore_plusBTN.addEventListener('click',function (){
    this.style.display = 'none';
    quickmore_minusBTN.style.display = 'block';
    quickBox_height.style.cssText = 'overflow:visible; height:auto;';
});

quickmore_minusBTN.addEventListener('click',function (){
    this.style.display = 'none';
    quickmore_plusBTN.style.display = 'block';
    quickBox_height.style.cssText = 'overflow:hidden; height:790px;';
});

let quickswiper;
function  quick_resizeSwiper(){
    if(window.innerWidth < 768 ) {
        let swiperWrapper  = document.querySelector('.quick_swiper').childNodes[1]
        swiperWrapper.classList.add("swiper-wrapper");
        swiperWrapper.querySelectorAll('div.quick_slide').forEach(function (i,v){
            i.classList.add("swiper-slide");
        });
        quickswiper = new Swiper(".quick_swiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: ".quick-button-next",
                prevEl: ".quick-button-prev",
            },
            breakpoints: {
                576 :{
                    slidesPerView :2,
                    spaceBetween: 5,
                }
            }
        });
    }else if(window.innerWidth > 768 && window.innerWidth < 992){
        let swiperWrapper  = document.querySelector('.quick_swiper').childNodes[1]
        swiperWrapper.querySelectorAll('div.quick_slide').forEach(function (i,v){
            let quickSlide =document.getElementsByClassName('quick_slide')[0];
            i.classList.remove("swiper-slide");
            i.style.width = "48%";
        });
    }else if(window.innerWidth > 992 ){
        let swiperWrapper  = document.querySelector('.quick_swiper').childNodes[1]
        swiperWrapper.querySelectorAll('div.quick_slide').forEach(function (i,v){
            let quickSlide =document.getElementsByClassName('quick_slide')[0];
            i.classList.remove("swiper-slide");
            i.style.width = "32.2%";
        });
    }
}
window.addEventListener('resize', quick_resizeSwiper);
quick_resizeSwiper();

/* 베스트출고차량 더보기*/
let bestmore_plusBTN = document.querySelector('.section7 .more_btn_box .plus_btn');
let bestmore_minusBTN = document.querySelector('.section7 .more_btn_box .minus_btn');
let bestBox_height = document.querySelector('.best_box');

bestmore_plusBTN.addEventListener('click',function (){
    this.style.display = 'none';
    bestmore_minusBTN.style.display = 'block';
    bestBox_height.style.cssText = 'overflow:visible; height:auto;';
});

bestmore_minusBTN.addEventListener('click',function (){
    this.style.display = 'none';
    bestmore_plusBTN.style.display = 'block';
    bestBox_height.style.cssText = 'overflow:hidden; height:804px;';
});
let bestswiper;
function  best_resizeSwiper(){
    if(window.innerWidth < 768 ) {
        let swiperWrapper  = document.querySelector('.best_swiper').childNodes[1]
        swiperWrapper.classList.add("swiper-wrapper");
        swiperWrapper.querySelectorAll('div.best_slide').forEach(function (i,v){
            i.classList.add("swiper-slide");
        });
        bestswiper = new Swiper(".best_swiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: ".best-button-next",
                prevEl: ".best-button-prev",
            },
            breakpoints: {
                576 :{
                    slidesPerView :2,
                    spaceBetween: 5,
                }
            }
        });
    }else if(window.innerWidth > 768 && window.innerWidth < 992) {
        let swiperWrapper = document.querySelector('.best_swiper').childNodes[1]
        swiperWrapper.querySelectorAll('div.best_slide').forEach(function (i, v) {
            let bestSlide = document.getElementsByClassName('quick_slide')[0];
            i.classList.remove("swiper-slide");
            i.style.width = "49%";
        });
    }else if(window.innerWidth > 992 ){
        let swiperWrapper  = document.querySelector('.best_swiper').childNodes[1]
        swiperWrapper.querySelectorAll('div.best_slide').forEach(function (i,v){
            let quickSlide =document.getElementsByClassName('best_slide')[0];
            i.classList.remove("swiper-slide");
            i.style.width = "100%";
        });
    }
}
window.addEventListener('resize', best_resizeSwiper);
best_resizeSwiper();

/* 신차장기렌트카는 신차줘 */
let iconswiper;
function  icon_resizeSwiper(){
    if(window.innerWidth < 768 ) {
        let swiperWrapper  = document.querySelector('.icon_swiper').childNodes[1]
        swiperWrapper.classList.add("swiper-wrapper");
        swiperWrapper.querySelectorAll('div.icon_slide').forEach(function (i,v){
            i.classList.add("swiper-slide");
        });
        iconswiper = new Swiper(".icon_swiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: ".icon-button-next",
                prevEl: ".icon-button-prev",
            },
            breakpoints: {
                576 :{
                    slidesPerView :2,
                    spaceBetween: 5,
                }
            }
        });
    }else if(window.innerWidth > 768 && window.innerWidth < 992) {
        let swiperWrapper = document.querySelector('.icon_swiper').childNodes[1]
        swiperWrapper.querySelectorAll('div.icon_slide').forEach(function (i, v) {
            let iconSlide = document.getElementsByClassName('icon_slide')[0];
            i.classList.remove("swiper-slide");
            i.style.width = "49%";
        });
    }else if(window.innerWidth > 992 ){
        let swiperWrapper  = document.querySelector('.icon_swiper').childNodes[1]
        swiperWrapper.querySelectorAll('div.icon_slide').forEach(function (i,v){
            let iconSlide =document.getElementsByClassName('icon_slide')[0];
            i.classList.remove("swiper-slide");
            i.style.width = "27%";
        });
    }
}
window.addEventListener('resize', icon_resizeSwiper);
icon_resizeSwiper();


/* 파트너사 */
let partnerTab = document.querySelectorAll('.partner_box ul li');
partnerTab.forEach(function (el,idx){
    el.addEventListener('click',function (){
        document.querySelector('.partner_box ul li.active').classList.remove('active');
        this.classList.add('active');

        if(idx === 0){
            document.querySelector('.make_cont').style.display = "flex";
            document.querySelector('.bank_cont').style.display = "none";
        }else if(idx === 1){
            document.querySelector('.bank_cont').style.display = "flex";
            document.querySelector('.make_cont').style.display = "none";
        }
    });
});