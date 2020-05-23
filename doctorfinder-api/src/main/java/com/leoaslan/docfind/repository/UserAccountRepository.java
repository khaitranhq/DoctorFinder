package com.leoaslan.docfind.repository;


import com.leoaslan.docfind.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserAccountRepository  extends JpaRepository<UserAccount, Integer> {
    @Query("SELECT ua.userID FROM UserAccount ua WHERE ua.email=:email AND ua.password=:password")
    List<Integer> findUserID(@Param("email") String email, @Param("password") String password);
}
