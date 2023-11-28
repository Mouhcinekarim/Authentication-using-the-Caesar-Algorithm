package com.crypto.api;

import com.crypto.dao.User;
import com.crypto.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    User login(@RequestBody User user){
       return userService.login(user);
    }

    @PostMapping("/signUp")
    User signUp(@RequestBody User user){
        return userService.SignUp(user);
    }



}
