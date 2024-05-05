import DivComponent from "../../common/div-component.js";
import './card.css'

export default class Card extends DivComponent {

    cardState;
    appState;

    constructor(appState, cardState) {
        super();
        this.appState = appState
        this.cardState = cardState
    }

    #addToFavorites() {
        this.appState.favorites.push(this.cardState)
    }

    #removeFromFavorites() {
        this.appState.favorites = this.appState.favorites.filter(card => card.key !== this.cardState.key
        )
    }

    render() {
        this.el.classList.add('card')
        const isFavorites = this.appState.favorites.find(book => book.key === this.cardState.key)
        this.el.innerHTML = `
           <div class="card__image"> 
                <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="Cover book" >
           </div>
           <div class="card__info">
                <div class="card__tag">
                    ${this.cardState.subject ? this.cardState.subject[0] : "Not specified"}
                </div>
                <div class="card__title">
                    ${this.cardState.title}
                </div>
                <div class="card__author">
                    ${this.cardState.author_name ? this.cardState.author_name[0] : "Not specified"}
                </div>
                <div class="card__footer">
                    <button class="button__add ${isFavorites ? 'button__active' : ''}">
                        <img src="
                            ${isFavorites
            ? '/static/favorites.svg'
            : '/static/favorite-white.svg'
        }" 
                        alt="Add to favorites">
                    </button>
                </div>
           </div>
            `
        this.el.querySelector('button').addEventListener('click', () => {
            if (isFavorites) {
                this.#removeFromFavorites()
            } else {
                this.#addToFavorites()
            }
        })
        return this.el
    }
}