package com.leoaslan.docfind.service.UpdateAccount;

import com.leoaslan.docfind.controller.SignupPageDTO;
import com.leoaslan.docfind.model.Specialty;
import com.leoaslan.docfind.model.UserAccount;
import com.leoaslan.docfind.model.UserType;
import com.leoaslan.docfind.repository.SpecialtyRepository;
import com.leoaslan.docfind.repository.UserAccountRepository;
import com.leoaslan.docfind.repository.UserTypeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@Log4j2
@RequiredArgsConstructor
public class UpdateAccountService {
 //   @Autowired
    private final UserAccountRepository userAccountRepository;
    private final SpecialtyRepository specialtyRepository;
    private final UserTypeRepository userTypeRepository;

    public ResponseEntity<?> update(SignupPageDTO signupPageDTO){
        log.info(signupPageDTO);
        UserAccount userAccount=userAccountRepository.findByEmail(signupPageDTO.getEmail());
        log.info(userAccount);
        if(userAccount==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else{

            userAccount.setAddress(signupPageDTO.getAddress());

            userAccount.setAvatarFileName(signupPageDTO.getAvatarFileName());
            userAccount.setBirthdate(signupPageDTO.getBirthdate());
            userAccount.setFullName(signupPageDTO.getFullName());
            userAccount.setGender(signupPageDTO.getGender());
            userAccount.setPassword(signupPageDTO.getPassword());
            userAccount.setPhoneNumber(signupPageDTO.getPhoneNumber());

            UserType userType=userTypeRepository.findByUserTypeName(signupPageDTO.getUserTypeName());
            userAccount.setUserType(userType);
            log.info(userAccount);

            Specialty specialty=specialtyRepository.findBySpecialtyName(signupPageDTO.getSpecialtyName());
            if(specialty==null){
                userAccount.setSpecialty(null);
            }
            else{
                userAccount.setSpecialty(specialty);
            }


            userAccountRepository.save(userAccount);

            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
