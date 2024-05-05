import AbstractView from "../../common/view.js";
import onChange from "on-change";
import Header from "../../components/header/header.js";
import CardList from "../../components/card-list/card-list.js";

export default class FavoritesView extends AbstractView {


    appState;


    constructor(appState) {
        super()
        this.appState = appState
        this.appState = onChange(this.appState, this.appStateHook.bind(this))
        this.setTitle('Favorites book')
    }

    appStateHook(path) {
        if (path === 'favorites') {
            this.render()
        }
    }


    render() {
        const main = document.createElement('div')
        main.innerHTML = `
			<h1>Favorites books – ${this.appState.favorites.length}</h1>
		`
        main.append(new CardList(this.appState, {list: this.appState.favorites}).render())
        this.app.innerHTML = ''
        this.app.append(main)
        this.renderHeader()
    }

    renderHeader() {
        this.app.prepend(new Header(this.appState).render())
    }

    destroy() {
        onChange.unsubscribe(this.appState)
    }
}