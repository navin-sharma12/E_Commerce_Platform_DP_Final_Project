package com.neu.design.pattern.project.ECommercePlatform.models;

import com.neu.design.pattern.project.ECommercePlatform.models.api.EmployeeAPI;
import com.neu.design.pattern.project.ECommercePlatform.models.api.PersonAPI;
import com.neu.design.pattern.project.ECommercePlatform.models.api.SystemUserAPI;
import jakarta.persistence.*;
import lombok.Data;


@Entity
public class Employee implements EmployeeAPI {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double salary;

    private String designationTitle;

    public void setId(int id) {
        this.id = id;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public void setDesignationTitle(String designationTitle) {
        this.designationTitle = designationTitle;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public void setUser(PlatformUser user) {
        this.user = user;
    }

    @OneToOne
    @JoinColumn(name = "person_id")
    private Person person;

    @OneToOne
    @JoinColumn(name = "user_id")
    private PlatformUser user;

    public Employee(double salary, String designationTitle, Person person, PlatformUser user) {
        this.salary = salary;
        this.designationTitle = designationTitle;
        this.person = person;
        this.user = user;
    }

    @Override
    public double getSalary() {
        return salary;
    }

    @Override
    public String getDesignationTitle() {
        return designationTitle;
    }

    @Override
    public Person getPerson() {

        return person;
    }

    @Override
    public PlatformUser getUser() {
        return user;
    }
}
