package com.neu.design.pattern.project.ECommercePlatform.jpa.repository;

import com.neu.design.pattern.project.ECommercePlatform.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    Optional<Employee> findById(int id);


    Optional<Employee> findByUsernameAndPassword(String username, String password);

    Optional<Employee> findByUsername(String username);
}
