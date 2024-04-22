package com.neu.design.pattern.project.ECommercePlatform.patterns.singleton;

import com.neu.design.pattern.project.ECommercePlatform.jpa.repository.CartItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class Cart {
    private static Cart instance;
    private List<CartItem> items;

    @Autowired
    CartItemsRepository cartItemsRepository;

    private Cart() {
        items = new ArrayList<>();
    }

    public static synchronized Cart getInstance() {
        if (instance == null) {
            instance = new Cart();
        }
        return instance;
    }

    public void addItem(CartItem item) {
        items.add(item);
        cartItemsRepository.save(item);
    }

    public void removeItem(CartItem item) {
        items.remove(item);
        cartItemsRepository.delete(item);
    }

    public List<CartItem> getItems() {
        return items;
    }
}
