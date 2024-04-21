package com.neu.design.pattern.project.ECommercePlatform.controller;

import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.Cart;
import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.CartItem;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/cart")
public class CartController {

    @PostMapping("/add")
    public ResponseEntity<Cart> addItemToCart(@RequestBody CartItem item) {
        Cart cart = Cart.getInstance();
        cart.addItem(item);
        return ResponseEntity.ok(cart);
    }

    @DeleteMapping("/remove")
    public ResponseEntity<Cart> removeItemFromCart(@RequestBody CartItem item) {
        Cart cart = Cart.getInstance();
        cart.removeItem(item);
        return ResponseEntity.ok(cart);
    }

    @GetMapping
    public ResponseEntity<List<CartItem>> getCartItems() {
        Cart cart = Cart.getInstance();
        return ResponseEntity.ok(cart.getItems());
    }
}

