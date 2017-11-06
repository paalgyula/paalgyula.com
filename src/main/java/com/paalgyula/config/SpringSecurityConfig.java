package com.paalgyula.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.encoding.PasswordEncoder;
import org.springframework.security.authentication.encoding.PlaintextPasswordEncoder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.social.config.annotation.EnableSocial;

@Configuration
@EnableSocial
@EnableWebSecurity
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new PlaintextPasswordEncoder();
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web
                //Spring Security ignores request to static resources such as CSS or JS files.
                .ignoring()
                .antMatchers("/static/**", "/public/**");
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        http.antMatcher("/**")
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/**/index.html",
                        "/oneletrajz.pdf",
                        "/sitemap.xml",
                        "/tutorials",
                        "/robots.txt",
                        "/error",
                        "/resume.pdf",
                        "/stylesheets/**",
                        "/login**",
                        "/connect/**",
                        "/webjars/**",
                        "/assets/**",
                        "/",
                        "/favicon.ico")
                .permitAll()
                .anyRequest().authenticated()
                .and().formLogin().loginPage("/login").permitAll();
                //.and().addFilterBefore(this.ssoFilter(), BasicAuthenticationFilter.class);
        // @formatter:on
    }
}
