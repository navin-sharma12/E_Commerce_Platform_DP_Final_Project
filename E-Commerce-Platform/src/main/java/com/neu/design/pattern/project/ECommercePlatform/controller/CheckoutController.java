package com.neu.design.pattern.project.ECommercePlatform.controller;

import com.neu.design.pattern.project.ECommercePlatform.patterns.facade.CheckoutFacade;
import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/checkout")
public class CheckoutController {
    @Autowired
    private CheckoutFacade checkoutFacade;

    @PostMapping()
    public ResponseEntity<String> completeCheckout() {
        checkoutFacade.completeCheckout(Cart.getInstance());
        return ResponseEntity.ok("Checkout completed successfully.");
    }
}
