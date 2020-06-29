package com.leoaslan.docfind.controller;

import com.leoaslan.docfind.dto.UserAccountDTO;
import com.leoaslan.docfind.service.profile.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfileController {
    @Autowired
    ProfileService profileService;

    @PutMapping("/{id}")
    ResponseEntity<?> updateUserAccount(@PathVariable Integer id, @RequestBody Map<String, Object> req){
        return profileService.update(id, new UserAccountDTO(req));
    }

    @GetMapping("/{id}")
    ResponseEntity<?> getUserAccount(@PathVariable Integer id){
        return profileService.get(id);
    }
}
