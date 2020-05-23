package com.leoaslan.doctorfinder.services;

public interface LoginService {
    Boolean validateUser(String email, String password);
}