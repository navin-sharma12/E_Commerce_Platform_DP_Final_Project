package com.neu.design.pattern.project.ECommercePlatform.patterns.observer;

import com.neu.design.pattern.project.ECommercePlatform.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class CustomerNotificationService implements OrderObserver {

    EmailService emailService;

    @Autowired
    public CustomerNotificationService(EmailService emailService) {
        this.emailService = emailService;
    }

    @Override
    public void update(Order order) {
        String emailBody = "Thank you for your order. Your order with ID " + order.getId() + " has been successfully placed.";
        String customerEmail = "customer@example.com";
        emailService.sendEmail(customerEmail, "Order Confirmation", emailBody);
        System.out.println("Order confirmation email sent to " + customerEmail);
    }
}

