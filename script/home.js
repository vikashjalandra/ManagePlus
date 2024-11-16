const playVideo= document.querySelector('.playVideo')
const videoYt = document.querySelector('.videoYt')
const cross = document.querySelector('.cross')

playVideo.addEventListener('click', () => {
    videoYt.style.display = 'flex'
})

cross.addEventListener('click', () => {
    videoYt.style.display = 'none'
})

let currentStepSm = 1;
const totalStepsSm = 2;

function showStepSm(stepNumber) {
    for (let i = 1; i <= totalStepsSm; i++) {
        const step = document.getElementById(`smStep${i}`);
        step.style.display = i === stepNumber ? 'block' : 'none';
    }
}

function nextStepSm() {
    if (currentStepSm < totalStepsSm) {
        currentStepSm++;
        showStepSm(currentStepSm);
    }
}

function prevStepSm() {
    if (currentStepSm > 1) {
        currentStepSm--;
        showStepSm(currentStepSm);
    }
}

showStepSm(currentStepSm);

let currentStepEs = 1;
const totalStepsEs = 2;

function showStepEs(stepNumber) {
    for (let i = 1; i <= totalStepsEs; i++) {
        const step = document.getElementById(`esStep${i}`);
        step.style.display = i === stepNumber ? 'block' : 'none';
    }
}

function nextStepEs() {
    if (currentStepEs < totalStepsEs) {
        currentStepEs++;
        showStepEs(currentStepEs);
    }
}

function prevStepEs() {
    if (currentStepEs > 1) {
        currentStepEs--;
        showStepEs(currentStepEs);
    }
}

showStepEs(currentStepEs);

let currentStepSc = 1;
const totalStepsSc = 2;

function showStepSc(stepNumber) {
    for (let i = 1; i <= totalStepsEs; i++) {
        const step = document.getElementById(`salesStep${i}`);
        step.style.display = i === stepNumber ? 'block' : 'none';
    }
}

function nextStepSc() {
    if (currentStepSc < totalStepsSc) {
        currentStepSc++;
        showStepSc(currentStepSc);
    }
}

function prevStepSc() {
    if (currentStepSc > 1) {
        currentStepSc--;
        showStepSc(currentStepSc);
    }
}

showStepSc(currentStepSc);

let currentStepWv = 1;
const totalStepsWv = 2;

function showStepWv(stepNumber) {
    for (let i = 1; i <= totalStepsWv; i++) {
        const step = document.getElementById(`wvtStep${i}`);
        step.style.display = i === stepNumber ? 'block' : 'none';
    }
}

function nextStepWv() {
    if (currentStepWv < totalStepsWv) {
        currentStepWv++;
        showStepWv(currentStepWv);
    }
}

function prevStepWv() {
    if (currentStepWv > 1) {
        currentStepWv--;
        showStepWv(currentStepWv);
    }
}

showStepWv(currentStepWv);


const quickTourCards =document.querySelectorAll('.quickTourCard')
const quickTourContents = document.querySelectorAll('.quickTourContent')

quickTourCards.forEach((card, index) => {
    card.addEventListener('click', function ()  {
        quickTourContents.forEach(content => {
            content.style.display = 'none'
        })
        quickTourContents[index].style.display = 'block'
        quickTourCards.forEach(card => {
            card.classList.remove('active')
        })
        card.classList.add('active')
    }
    )
}
)   

const featureCards =document.querySelector('.featureCards')
const featureCardWIdth = featureCards.clientWidth
console.log(featureCardWIdth);


const slideNum1= document.querySelector('.slideNum1')
let j=1
function slideLeft1(){
    if(j>1){
        j--
        slideNum1.innerHTML = `${j}/6`;
    }
    featureCards.scrollLeft -= featureCardWIdth
}

function slideRight1(){
    if(j<6){
        j++
        slideNum1.innerHTML = `${j}/6`;
    }
    featureCards.scrollLeft += featureCardWIdth

}


const testimonialCards =document.querySelector('.testimonialCards')
const testimonialCardWIdth = testimonialCards.clientWidth
console.log(testimonialCardWIdth)
const slideNum= document.querySelector('.slideNum')
let i=1
function slideLeft(){
    if(i>1){
        i--
        slideNum.innerHTML = `${i}/3`;
    }
    testimonialCards.scrollLeft -= testimonialCardWIdth
}

function slideRight(){
    if(i<3){
        i++
        slideNum.innerHTML = `${i}/3`;
    }
    testimonialCards.scrollLeft += testimonialCardWIdth

}

const yearlyBtn = document.querySelector('#yearly')
const monthlyBtn = document.querySelector('#monthly')
const popularPricing = document.querySelector('.popular h4')
const agencyPricing = document.querySelector('.agency h4')
const usdBtn = document.querySelector('#usdBtn')
const inrBtn = document.querySelector('#inrBtn')



yearlyBtn.addEventListener('click', () => {
    yearlyBtn.classList.add('active')
    monthlyBtn.classList.remove('active')
    if (usdBtn.classList.contains('active')) {
        popularPricing.innerHTML = '$<span>590</span><br>/business/month'
        agencyPricing.innerHTML = '$<span>290</span><br>/business/month'
        
    }
    else {
        popularPricing.innerHTML = '₹<span>48000</span><br>/business/month'
        agencyPricing.innerHTML = '₹<span>24000</span><br>/business/month'
    }
    
})

monthlyBtn.addEventListener('click', () => {
    monthlyBtn.classList.add('active')
    yearlyBtn.classList.remove('active')
    if (usdBtn.classList.contains('active')) {
        popularPricing.innerHTML = '$<span>59.00</span><br>/business/month'
        agencyPricing.innerHTML = '$<span>29.00</span><br>/business/month'
    }
    else {
        popularPricing.innerHTML = '₹<span>4800</span><br>/business/month'
        agencyPricing.innerHTML = '₹<span>2400</span><br>/business/month'
    }
})



usdBtn.addEventListener('click', () => {
    usdBtn.classList.add('active')
    inrBtn.classList.remove('active')
    if (yearlyBtn.classList.contains('active')) {
        popularPricing.innerHTML = '$<span>590</span><br>/business/month'
        agencyPricing.innerHTML = '$<span>290</span><br>/business/month'
    } else {
    popularPricing.innerHTML = '$<span>59.00</span><br>/business/month'
    agencyPricing.innerHTML = '$<span>29.00</span><br>/business/month'
    }
}
)

inrBtn.addEventListener('click', () => {
    inrBtn.classList.add('active')
    usdBtn.classList.remove('active')
    if (yearlyBtn.classList.contains('active')) {
        popularPricing.innerHTML = '₹<span>48000</span><br>/business/month'
        agencyPricing.innerHTML = '₹<span>24000</span><br>/business/month'
    } else {
    popularPricing.innerHTML = '₹<span>4800</span><br>/business/month'
    agencyPricing.innerHTML = '₹<span>2400</span><br>/business/month'
    }
}
)

const heroCards = document.querySelectorAll('.heroCard')
const heroCardHover = document.querySelectorAll('.heroCardHover')

heroCards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        heroCardHover[index].style.display = 'block'
    })
    card.addEventListener('mouseout', () => {
        heroCardHover[index].style.display = 'none'
    })
})