package com.paalgyula;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by paalgyula on 2017. 05. 26..
 */
@Controller
public class TutorialsController {
    @GetMapping("/tutorials")
    public String tutorialIndex(Model model) {
        return "tutorial/index";
    }
}
