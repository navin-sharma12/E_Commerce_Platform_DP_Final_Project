package com.neu.design.pattern.project.ECommercePlatform.models;

import com.neu.design.pattern.project.ECommercePlatform.models.api.SystemUserAPI;

public class User implements SystemUserAPI {
    public String userName;
    public String password;
    public int age;
    public String dateOfBirth;
    public int id;

    @Override
    public String getName() {
        return userName;
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
    public String getUserName() {
        return userName;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public int getId() {
        return id;
    }
}
