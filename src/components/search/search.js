import DivComponent from "../../common/div-component.js";
import './search.css'

export default class Search extends DivComponent {

    state;

    constructor(state) {
        super();
        this.state = state
    }

    search() {
        this.state.searchQuery = this.el.querySelector('input').value
    }

    render() {
        this.el.classList.add('search')
        this.el.innerHTML = `
            <div  class="search__wrapper">
                <input 
                    type="text" 
                    class="search__input"
                    placeholder="Search book or author..." 
                    value="${this.state.searchQuery ? this.state.searchQuery : ""}"
                 />
                 <img src="/static/search.svg" alt="Search">
            </div>
            <button aria-label="Search"><img src="/static/search-white.svg" alt="Search"></button>
        `
        this.el.querySelector('button').addEventListener('click', this.search.bind(this))
        this.el.querySelector('input').addEventListener('keydown', (event) => {
            if (event.code === "Enter") {
                this.search()
            }
        })
        return this.el
    }
}