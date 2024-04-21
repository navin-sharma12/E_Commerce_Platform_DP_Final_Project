package com.neu.design.pattern.project.ECommercePlatform.patterns.state;

import com.neu.design.pattern.project.ECommercePlatform.patterns.observer.Order;

public class ShippedState implements OrderState {
    public void next(Order order) {
        order.setState(new DeliveredState());
    }

    public void previous(Order order) {
        order.setState(new ProcessingState());
    }

    public void printStatus() {
        System.out.println("Order is shipped.");
    }
}
