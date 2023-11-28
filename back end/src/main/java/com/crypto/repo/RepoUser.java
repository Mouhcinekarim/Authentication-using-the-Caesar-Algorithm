package com.crypto.repo;

import com.crypto.dao.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RepoUser extends JpaRepository<User,Long> {

    Optional<User> findByEmail(String email);
}
