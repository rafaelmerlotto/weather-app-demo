
const caffeCorto = document.querySelector('.caffeCorto');
const caffeLungo = document.querySelector('.caffeLungo');
const avvisi = document.querySelector('.avvisi');
const onOff = document.querySelector('.onOff');
const riempireSerbatoio = document.querySelector('.riempireSerbatoio');
const livelloSerbatoio = document.querySelector('.livelloSerbatoio');
const cialda = document.querySelector('.cialda');
const outputCaffe = document.querySelector('.output-caffe')
const coffeeCorto = document.querySelector('.coffeeCorto');
const coffeeLungo = document.querySelector('.coffeeLungo');
const prendeCaffe = document.querySelector('.prendeCaffe');
const tazza = document.querySelector('.tazza')
livelloSerbatoio.innerText = 0;

tazza.addEventListener('click', () => {
 setTimeout(() => {
    coffeeCorto.style.visibility = 'hidden';
    coffeeLungo.style.visibility = 'hidden';
 }, 2000)
   
})

const MacchinaCaffe = function (accesa, LivelloAcqua, cialdacaffe) {
    this.accesa = accesa;
    this.LivelloAcqua = LivelloAcqua;
    this.cialdacaffe = cialdacaffe;
}


MacchinaCaffe.prototype.accendi = function () {
    this.accesa = !this.accesa;
    onOff.style.backgroundColor = `${this.accesa ? 'green' : 'red'}`
}
onOff.addEventListener('click', (event) => {
    event.preventDefault();
    macchinettaCaffe.accendi();
})


MacchinaCaffe.prototype.acquaSerbatoio = function () {
    if (this.LivelloAcqua <= 0) {
        avvisi.innerText = "Il serbatoio è vuoto";
        return this.LivelloAcqua = 0;
    }
}


MacchinaCaffe.prototype.riempeSebatoio = function () {
    this.LivelloAcqua += 1;
    if (this.LivelloAcqua > 0) {
        avvisi.innerText = "";
        livelloSerbatoio.innerText = this.LivelloAcqua;
        livelloSerbatoio.style.backgroundColor = '#049ce8'
        if (this.LivelloAcqua >= 10) {
            return this.LivelloAcqua = 9;
        }
    }
}
riempireSerbatoio.addEventListener('click', () => {
    macchinettaCaffe.riempeSebatoio();
})


MacchinaCaffe.prototype.cialda = function () {
    if (this.accesa) {
        this.cialdacaffe = !this.cialdacaffe;
        cialda.style.backgroundColor = `${this.cialdacaffe ? '#6f4e37' : '#9ea8b4'}`
        //console.log(`${this.cialdacaffe ? 'Inserita' : 'tolta'}`)
    }
}
cialda.addEventListener('click', (event) => {
    event.preventDefault();
    macchinettaCaffe.cialda();
})



MacchinaCaffe.prototype.caffeCorto = function () {
    if (this.accesa && this.cialdacaffe && this.LivelloAcqua) {
        setTimeout(() => {

            livelloSerbatoio.innerText = this.LivelloAcqua -= 1;
            macchinettaCaffe.acquaSerbatoio();
            macchinettaCaffe.cialda();
            coffeeCorto.style.visibility ='visible';
            coffeeCorto.removeAttribute('hidden');
        }, 3000);
    }
    if (this.cialdacaffe === false) {
        cialda.style.backgroundColor = '#9ea8b4';
    }
}
caffeCorto.addEventListener('click', () => {
    macchinettaCaffe.caffeCorto();

})


MacchinaCaffe.prototype.caffeLungo = function () {
    if (this.accesa && this.cialdacaffe && this.LivelloAcqua) {
        setTimeout(() => {

            livelloSerbatoio.innerText = this.LivelloAcqua -= 1;
            macchinettaCaffe.acquaSerbatoio();
            macchinettaCaffe.cialda();
            coffeeLungo.style.visibility ='visible';
            coffeeLungo.removeAttribute('hidden');
        }, 3000);
    }
    if (this.cialdacaffe === false) {
        cialda.style.backgroundColor = '#9ea8b4';
    }
}
caffeLungo.addEventListener('click', () => {
    macchinettaCaffe.caffeLungo();
})


const macchinettaCaffe = new MacchinaCaffe(false, 0, false);
macchinettaCaffe.acquaSerbatoio();

