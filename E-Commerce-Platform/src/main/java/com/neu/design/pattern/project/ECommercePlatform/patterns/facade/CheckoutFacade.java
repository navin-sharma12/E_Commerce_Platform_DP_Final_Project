package com.neu.design.pattern.project.ECommercePlatform.patterns.facade;

import com.neu.design.pattern.project.ECommercePlatform.models.InvoiceFactory;
import com.neu.design.pattern.project.ECommercePlatform.patterns.builder.OrderBuilder;
import com.neu.design.pattern.project.ECommercePlatform.patterns.observer.Order;
import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.Cart;
import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.CartItem;
import com.neu.design.pattern.project.ECommercePlatform.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;

public class CheckoutFacade {

    @Autowired
    private OrderService orderService;

    @Autowired
    private InvoiceFactory invoiceFactory;

    public void completeCheckout(Cart cart) {
        Order order = orderService.createOrder(new ArrayList<>(cart.getItems()));
        order.placeOrder();
        String invoice = invoiceFactory.generateInvoice(order);
        order.printStatus();
    }
}