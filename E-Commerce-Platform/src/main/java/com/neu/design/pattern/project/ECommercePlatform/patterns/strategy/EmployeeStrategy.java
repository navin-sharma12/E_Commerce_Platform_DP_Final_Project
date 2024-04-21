package com.neu.design.pattern.project.ECommercePlatform.patterns.strategy;

import com.neu.design.pattern.project.ECommercePlatform.jpa.repository.EmployeeRepository;
import com.neu.design.pattern.project.ECommercePlatform.models.Employee;
import com.neu.design.pattern.project.ECommercePlatform.models.api.EmployeeAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

public class EmployeeStrategy implements StrategyAPI{

    @Autowired
    EmployeeRepository employeeRepository;
    Employee employee;

    int id;

    public EmployeeStrategy(EmployeeRepository employeeRepository, Employee employee) {
        this.employeeRepository = employeeRepository;
        this.employee = employee;
    }

    public EmployeeStrategy(EmployeeRepository employeeRepository, int employeeId) {
        this.employeeRepository = employeeRepository;
        this.id = employeeId;
    }

    @Override
    public void add() {
        if (this.employeeRepository.findByUsername(this.employee.getUser().getUsername()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username already exists");
        } else {
            this.employeeRepository.save(this.employee);
        }
    }

    @Override
    public void update(int id) {
        Optional<Employee> emp = this.employeeRepository.findById(id);
        if (emp.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Employee does not exist");
        }
        emp.get().setDesignationTitle(this.employee.getDesignationTitle());
        emp.get().getPerson().setDateOfBirth(this.employee.getPerson().getDateOfBirth());
        emp.get().getPerson().setFullName(this.employee.getPerson().getFullName());
        emp.get().getUser().setPassword(this.employee.getUser().getPassword());
        emp.get().setSalary(this.employee.getSalary());
        emp.get().getUser().setUsername(this.employee.getUser().getUsername());
        this.employeeRepository.save(emp.get());
    }

    @Override
    public void delete() {
        Optional<Employee> emp = this.employeeRepository.findById(this.id);
        if (emp.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Employee does not exist");
        }
        this.employeeRepository.delete(emp.get());
    }
}
