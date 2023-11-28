package com.crypto.service;

import com.crypto.dao.User;
import com.crypto.repo.RepoUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private RepoUser repoUser;


    public User login(User user){

        User userS=repoUser.findByEmail(chiffrementCesar(user.getEmail(),2))
                .orElseThrow(() -> new RuntimeException("not found"));
        if(userS.getPassword().equals(chiffrementCesar( user.getPassword(),2))) return User.builder()
                .email(userS.getEmail())
                .build();
        else throw new RuntimeException("password or email invalid");

    }

    public User SignUp(User user){
        user.setPassword(chiffrementCesar(user.getPassword(),2));
        user.setEmail(chiffrementCesar(user.getEmail(),2));

        return repoUser.save(user);
    }
    private String chiffrementCesar(String texteClair, int decalage) {
        StringBuilder texteChiffre = new StringBuilder();
        for (char caractere : texteClair.toCharArray()) {
            if (Character.isLetter(caractere)) {
                if (Character.isLowerCase(caractere)) {
                    texteChiffre.append((char) (((caractere - 'a' + decalage) % 26) + 'a'));
                } else if (Character.isUpperCase(caractere)) {
                    texteChiffre.append((char) (((caractere - 'A' + decalage) % 26) + 'A'));
                }
            } else {
                texteChiffre.append(caractere);
            }
        }
        return texteChiffre.toString();
    }
    private String dechiffrementCesar(String texteChiffre, int decalage) {
        StringBuilder texteDechiffre = new StringBuilder();
        for (char caractere : texteChiffre.toCharArray()) {
            if (Character.isLetter(caractere)) {
                if (Character.isLowerCase(caractere)) {
                    texteDechiffre.append((char) (((caractere - 'a' - decalage + 26) % 26) + 'a'));
                } else if (Character.isUpperCase(caractere)) {
                    texteDechiffre.append((char) (((caractere - 'A' - decalage + 26) % 26) + 'A'));
                }
            } else {
                texteDechiffre.append(caractere);
            }
        }
        return texteDechiffre.toString();
    }
}
