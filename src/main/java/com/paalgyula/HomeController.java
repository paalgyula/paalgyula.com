package com.paalgyula;

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
    @GetMapping
    public String initRediect() {
        return "redirect:/hu/index.html";
    }

    @RequestMapping("/{lang}/")
    public String redirectToIndex(@PathVariable("lang") String lang) {
        if (lang.equalsIgnoreCase("hu")) {
            return "redirect:/hu/index.html";
        } else {
            return "redirect:/en/index.html";
        }
    }

    @RequestMapping("/{lang}/index.html")
    public String showMainPage() {
        return "index";
    }
}
