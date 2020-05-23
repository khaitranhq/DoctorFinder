package com.leoaslan.doctorfinder.respository;

import java.util.List;

import com.leoaslan.doctorfinder.models.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserAccountRepository  extends JpaRepository<UserAccount, Integer> {
    @Query("SELECT userID FROM UserAccounts WHERE email=:email AND password=:password")
    List<Integer> findUserID(@Param("email") String email, @Param("password") String password);
}
