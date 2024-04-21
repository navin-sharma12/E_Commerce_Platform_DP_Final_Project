package com.neu.design.pattern.project.ECommercePlatform.patterns.state;

import com.neu.design.pattern.project.ECommercePlatform.patterns.observer.Order;

public class DeliveredState implements OrderState {
    public void next(Order order) {
        System.out.println("Order has been delivered.");
    }

    public void previous(Order order) {
        order.setState(new ShippedState());
    }

    public void printStatus() {
        System.out.println("Order is delivered.");
    }
}
