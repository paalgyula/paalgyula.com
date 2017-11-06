package com.paalgyula;

import org.springframework.social.config.annotation.EnableSocial;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by paalgyula on 2017. 04. 23..
 */
@Controller
@RequestMapping("/")
public class HomeController {

    @GetMapping("/login")
    public String loginPage() {
        return "login";
    }

    @GetMapping({"/{lang}/", "/", "/index.html"})
    public String redirectToIndex(@PathVariable(value = "lang", required = false) String lang) {
        if (lang == null || lang.equalsIgnoreCase("hu")) {
            return "redirect:/hu/index.html";
        } else {
            return "redirect:/en/index.html";
        }
    }

    @RequestMapping("/{lang}/index.html")
    public String showMainPage() {
        return "index";
    }

    @GetMapping("/oneletrajz.pdf")
    public String oldResume() {
        return "redirect:/resume.pdf";
    }
}

