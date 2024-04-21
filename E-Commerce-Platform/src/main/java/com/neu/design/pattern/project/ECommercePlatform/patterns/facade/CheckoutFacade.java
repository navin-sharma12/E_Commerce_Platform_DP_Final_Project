package com.neu.design.pattern.project.ECommercePlatform.patterns.facade;

import com.neu.design.pattern.project.ECommercePlatform.patterns.builder.OrderBuilder;
import com.neu.design.pattern.project.ECommercePlatform.patterns.observer.Order;
import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.Cart;
import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.CartItem;

public class CheckoutFacade {
    public void completeCheckout(Cart cart) {
        OrderBuilder builder = new OrderBuilder();
        for (CartItem item : cart.getItems()) {
            builder.addItem(item);
        }
        Order order = builder.build();
        order.placeOrder();
        order.printStatus();
    }
}