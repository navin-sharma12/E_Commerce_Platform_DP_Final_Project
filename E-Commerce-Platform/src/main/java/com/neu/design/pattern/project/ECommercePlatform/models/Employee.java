package com.neu.design.pattern.project.ECommercePlatform.models;

import com.neu.design.pattern.project.ECommercePlatform.models.api.EmployeeAPI;
import com.neu.design.pattern.project.ECommercePlatform.models.api.SystemUserAPI;
import lombok.Data;

@Data
public class Employee implements SystemUserAPI, EmployeeAPI {
    public String name;
    public int age;

    public String dateOfBirth;

    public double salary;

    public String userName;
    public String password;

    public int employeeId;

    public String designationTitle;


    @Override
    public String getName() {
        return name;
    }

    @Override
    public int getAge() {
        return age;
    }

    @Override
    public String getDateOfBirth() {
        return dateOfBirth;
    }

    @Override
    public double getSalary() {
        return salary;
    }

    @Override
    public String getUserName() {
        return userName;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public int getId() {
        return employeeId;
    }

    @Override
    public String getDesignationTitle() {
        return designationTitle;
    }
}
