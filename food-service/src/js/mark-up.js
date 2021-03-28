import menuItemTpl from '../templates/menu-item.hbs'
import menuDishes from './menu.json'

const menuRef = document.querySelector('.js-menu')

const menuMarkUp = createMenuDishesMarkUp(menuDishes)
 
menuRef.insertAdjacentHTML('beforeend', menuMarkUp)

function createMenuDishesMarkUp(menu) {
    return menu.map(menuItemTpl).join('')
}

