package com.neu.design.pattern.project.ECommercePlatform.models;

import com.neu.design.pattern.project.ECommercePlatform.patterns.observer.Order;
import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.CartItem;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class InvoiceFactory {

    public static String generateInvoice(Order order) {
        StringBuilder invoice = new StringBuilder();
        invoice.append("Invoice Date: ").append(new Date()).append("\n");
        invoice.append("Order ID: ").append(order.getId()).append("\n");
        invoice.append("Items:\n");

        for (CartItem item : order.getItems()) {
            invoice.append(item.getProduct().getName()).append(" - Quantity: ")
                    .append(item.getQuantity()).append(", Price: $")
                    .append(item.getProduct().getPrice() * item.getQuantity()).append("\n");
        }
        
        return invoice.toString();
    }
}

