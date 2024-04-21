package com.neu.design.pattern.project.ECommercePlatform.patterns.observer;

import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.CartItem;
import com.neu.design.pattern.project.ECommercePlatform.patterns.state.OrderState;
import com.neu.design.pattern.project.ECommercePlatform.patterns.state.ProcessingState;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private List<CartItem> items;

    @Transient
    private OrderState state;
    @Transient
    private List<OrderObserver> observers;

    public Order() {
        this.state = new ProcessingState();
        this.items = new ArrayList<>();
        this.observers = new ArrayList<>();
        observers.add(new CustomerNotificationService());
    }
    public Order(List<CartItem> items) {
        this.state = new ProcessingState();
        this.items = items;
        this.observers = new ArrayList<>();
        observers.add(new CustomerNotificationService());
    }
    public void setState(OrderState state) {
        this.state = state;
    }

    public void next() {
        state.next(this);
    }

    public void previous() {
        state.previous(this);
    }

    public void printStatus() {
        state.printStatus();
    }

    public void addObserver(OrderObserver observer) {
        observers.add(observer);
    }

    public void placeOrder() {
        observers.forEach(observer -> observer.update(this));
        next();
    }

    public List<CartItem> getItems()
    {
        return items;
    }

    public Long getId() {
        return id;
    }

    public OrderState getState() {
        return state;
    }
}
