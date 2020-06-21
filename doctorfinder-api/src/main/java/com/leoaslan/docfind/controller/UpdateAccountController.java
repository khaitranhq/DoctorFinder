package com.leoaslan.docfind.controller;

import com.leoaslan.docfind.dto.UserAccountDTO;
import com.leoaslan.docfind.service.updateAccount.UpdateAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/user")
public class UpdateAccountController {
    @Autowired
    UpdateAccountService updateAccountService;

    @PutMapping("/{id}")
    ResponseEntity<?> userAccount(@PathVariable Integer id, @RequestBody Map<String, Object> req){
        return updateAccountService.update(id, new UserAccountDTO(req));
    }
}
