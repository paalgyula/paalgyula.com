package com.paalgyula.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.social.UserIdSource;
import org.springframework.social.config.annotation.ConnectionFactoryConfigurer;
import org.springframework.social.config.annotation.SocialConfigurer;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.google.connect.GoogleConnectionFactory;

@Configuration
public class SocialConfig implements SocialConfigurer {
    //@Value("${spring.social.google.app-id")
    private String googleAppId = "321145677628-o8448kficmgrvn7elcknaaapbu2035ac.apps.googleusercontent.com";

    //@Value("${spring.social.google.app-secret")
    private String googleAppSecret = "wTc_d16c20TN0UjvJlGXw3Eu";

    @Override
    public void addConnectionFactories(ConnectionFactoryConfigurer configurer, Environment env) {
        configurer.addConnectionFactory(new GoogleConnectionFactory(googleAppId, googleAppSecret));
    }

    @Override
    public UserIdSource getUserIdSource() {
        return null;
    }

    @Override
    public UsersConnectionRepository getUsersConnectionRepository(ConnectionFactoryLocator connectionFactoryLocator) {
        return null;
    }
}
