package com.neu.design.pattern.project.ECommercePlatform.controller;

import com.neu.design.pattern.project.ECommercePlatform.patterns.observer.Order;
import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.CartItem;
import com.neu.design.pattern.project.ECommercePlatform.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/place")
    public ResponseEntity<Order> placeOrder(@RequestBody List<CartItem> items) {
        Order order = new Order(items);
        order.placeOrder(); // Observers are notified here
        return ResponseEntity.ok(order);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Order order = orderService.findOrderById(id);
        return ResponseEntity.ok(order);
    }

    @PostMapping("/next/{id}")
    public ResponseEntity<Order> moveOrderToNextState(@PathVariable Long id) {
        Order order = orderService.findOrderById(id);
        order.next();
        return ResponseEntity.ok(order);
    }

    @PostMapping("/prev/{id}")
    public ResponseEntity<Order> moveOrderToPreviousState(@PathVariable Long id) {
        Order order = orderService.findOrderById(id);
        order.previous();
        return ResponseEntity.ok(order);
    }
}

