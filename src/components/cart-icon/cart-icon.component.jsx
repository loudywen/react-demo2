import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartIcon = ({triggerCartHidden}) => (
    <div className="cart-icon" onClick={triggerCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className={'item-count'}>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    triggerCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);