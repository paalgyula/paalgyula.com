package com.paalgyula.services;

import com.paalgyula.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        com.paalgyula.entities.User jpaUser = this.userRepository.findByUsername(userName);

        if (jpaUser != null)
            return new User(userName, jpaUser.getPassword(),
                    Collections.singletonList(new SimpleGrantedAuthority("FACEBOOK_USER")));
        else
            throw new UsernameNotFoundException("User not found with username: " + userName);
    }
}
