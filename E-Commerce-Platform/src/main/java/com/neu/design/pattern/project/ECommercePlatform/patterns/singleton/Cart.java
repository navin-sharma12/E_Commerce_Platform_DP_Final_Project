package com.neu.design.pattern.project.ECommercePlatform.patterns.singleton;

import com.neu.design.pattern.project.ECommercePlatform.jpa.repository.CartItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class Cart {
    private static Cart instance;

    private CartItemsRepository cartItemsRepository;

    private Cart() {
    }

    public static synchronized Cart getInstance() {
        if (instance == null) {
            instance = new Cart();
        }
        return instance;
    }

    // Dependency setter
    public void setCartItemsRepository(CartItemsRepository repository) {
        this.cartItemsRepository = repository;
    }

    public void addItem(CartItem item) {
        cartItemsRepository.save(item);
    }

    public void removeItem(CartItem item) {
        cartItemsRepository.delete(item);
    }

    public List<CartItem> getItems() {
      return  cartItemsRepository.findAll();
    }
}
