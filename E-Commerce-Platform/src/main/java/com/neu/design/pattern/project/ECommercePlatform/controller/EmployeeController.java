package com.neu.design.pattern.project.ECommercePlatform.controller;

import com.neu.design.pattern.project.ECommercePlatform.jpa.repository.EmployeeRepository;
import com.neu.design.pattern.project.ECommercePlatform.models.Employee;
import com.neu.design.pattern.project.ECommercePlatform.patterns.strategy.EmployeeStrategy;
import com.neu.design.pattern.project.ECommercePlatform.patterns.strategy.StrategyAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/employee")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepo;

    @GetMapping("/getAll")
    public List<Employee> getAll() {
        return employeeRepo.findAll();
    }

    @GetMapping("/getEmployee/{id}")
    public Employee getEmployee(@PathVariable int id) {
        return employeeRepo.findById(id).get();
    }

    @PutMapping("/update/{id}")
    public void update(@RequestBody Employee employee, @PathVariable int id) {
        StrategyAPI strategy = new EmployeeStrategy(employeeRepo, employee);
        strategy.update(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deletebyID(@PathVariable int id) {
        StrategyAPI strategy  = new EmployeeStrategy(employeeRepo, id);
        strategy.delete();
    }

    @PostMapping("/save")
    public void save(@RequestBody Employee employee) {
        StrategyAPI strategy = new EmployeeStrategy(employeeRepo, employee);
        strategy.add();
    }

}
