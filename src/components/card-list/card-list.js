import DivComponent from "../../common/div-component.js";
import './card-list.css'
import Card from "../card/card.js"

export default class CardList extends DivComponent {

    parentState;
    appState;

    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    render() {
        if (this.parentState.loading) {
            this.el.innerHTML = `<div class="card-list__loading">
                   Loading
                   <img src="/static/loading.svg" alt="Loading">
                </div>`;
            return this.el;
        }
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card_grid');
        this.el.append(cardGrid);
        for (const card of this.parentState.list) {
            cardGrid.append(new Card(this.appState, card).render());
        }
        return this.el;
    }
}