package com.leoaslan.doctorfinder.respository;

import com.leoaslan.doctorfinder.models.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository  extends JpaRepository<UserAccount, Integer> {

}
