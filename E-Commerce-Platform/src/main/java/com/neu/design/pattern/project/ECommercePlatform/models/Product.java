package com.neu.design.pattern.project.ECommercePlatform.models;

import com.neu.design.pattern.project.ECommercePlatform.models.api.ProductAPI;

public class Product extends ProductAPI {

    public Product(int id, String productName, int quantity, double price)
    {
        this.id = id;
        this.productName = productName;
        this.quantity = quantity;
        this.price  = price;
    }
    @Override
    public int getId() {
        return id;
    }

    @Override
    public String getProductName() {
        return getProductName();
    }

    @Override
    public int getQuantity() {
        return getQuantity();
    }

    @Override
    public double getPrice() {
        return price;
    }

}
