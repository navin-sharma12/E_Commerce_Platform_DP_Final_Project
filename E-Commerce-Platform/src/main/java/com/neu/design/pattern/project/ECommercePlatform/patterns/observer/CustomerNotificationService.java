package com.neu.design.pattern.project.ECommercePlatform.patterns.observer;

import com.neu.design.pattern.project.ECommercePlatform.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;

public class CustomerNotificationService implements OrderObserver {

    @Autowired
    EmailService emailService;

    @Override
    public void update(Order order) {
        String emailBody = "Thank you for your order. Your order with ID " + order.getId() + " has been successfully placed.";
        String customerEmail = "customer@example.com"; // This would realistically come from the order details or user profile
        emailService.sendEmail(customerEmail, "Order Confirmation", emailBody);
        System.out.println("Order confirmation email sent to " + customerEmail);
    }
}
