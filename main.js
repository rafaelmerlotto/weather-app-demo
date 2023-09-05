"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const endAndPoint = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';
function getCrypto() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`${endAndPoint}`)
            .then(response => response.json())
            .then(cryptoDati => render(cryptoDati));
    });
}
getCrypto();
function render(dati) {
    const divTitle = document.querySelector('.divTitle');
    dati.map((cpt) => {
        const card = document.createElement('div');
        card.classList.add('card', cpt.id);
        card.insertAdjacentHTML('afterbegin', `
        <h3>${cpt.name} - ${cpt.symbol}</h3>
        <img src="${cpt.image} height="50px" width="50px" />
        <p><strong>Valore attuale: </strong>${cpt.current_price} €</p>
        <p><strong>Min 24h: </strong>${cpt.low_24h} - <strong>Max 24h: </strong>${cpt.high_24h}</p>
        `);
        divTitle.insertAdjacentElement('afterend', card);
    });
}
