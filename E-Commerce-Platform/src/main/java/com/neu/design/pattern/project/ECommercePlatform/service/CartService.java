package com.neu.design.pattern.project.ECommercePlatform.service;

import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.Cart;
import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.CartItem;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    public Cart getCart() {
        return Cart.getInstance();
    }

    public void addItemToCart(CartItem item) {
        Cart cart = Cart.getInstance();
        cart.addItem(item);
    }

    public void removeItemFromCart(CartItem item) {
        Cart cart = Cart.getInstance();
        cart.removeItem(item);
    }
}

