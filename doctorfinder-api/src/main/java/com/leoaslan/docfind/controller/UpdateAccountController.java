package com.leoaslan.docfind.controller;

import com.leoaslan.docfind.service.UpdateAccount.UpdateAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/account")
public class UpdateAccountController {
    @Autowired
    UpdateAccountService updateAccountService;

    @PutMapping("/update")
    ResponseEntity<?> updateAccuont(SignupPageDTO signupPageDTO){
        return updateAccountService.update(signupPageDTO);
    }
}
