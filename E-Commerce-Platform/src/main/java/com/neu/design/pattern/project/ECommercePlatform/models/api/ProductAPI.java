package com.neu.design.pattern.project.ECommercePlatform.models.api;

public abstract class ProductAPI {
    public int id;
    public String productName;
    public int quantity;
    public double price;

    public abstract int getId();

    public  abstract  String getProductName();
    public abstract int getQuantity();

    public abstract double getPrice();


}
