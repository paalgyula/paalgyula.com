package com.paalgyula;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
@SpringBootTest
public class HomeControllerTest {

    @Autowired
    private HomeController homeController;

    @Autowired
    private MockMvc mockMvc;

    @Before
    public void setUp() throws Exception {
        //this.homeController = mock(HomeController.class);
    }

    @Test
    public void shouldRedirectToHuIndexPage() throws Exception {
        this.mockMvc.perform(
                get("/"))
                .andExpect(status().is3xxRedirection())
                .andExpect(redirectedUrl("/hu/index.html"));
    }

    @Test
    public void shouldReturnDefaultMessage() throws Exception {
        this.mockMvc.perform(get("/hu/index.html")).andExpect(status().isOk())
                .andExpect(content().string(containsString("Paál Gyula")));
    }

    @Test
    public void shouldRedirectFromOneletrajzToResume() throws Exception {
        this.mockMvc.perform(get("/oneletrajz.pdf"))
                .andExpect(redirectedUrl("/resume.pdf"));
    }

    @Test
    public void shouldRenderErrorPage() throws Exception {
        this.mockMvc.perform(get("/error"))
                .andExpect(status().isOk());
    }

    @Test
    public void shouldForbiddenStatus() throws Exception {
        this.mockMvc.perform(get("/non_existing_page"))
                .andExpect(status().isForbidden());
    }

//    @Test
//    public void show_main_page() throws Exception {
//        homeController.showMainPage();
//    }
//
//    @Test
//    public void redirect_to_main_page() throws Exception {
//        homeController.redirectToIndex("hu");
//        homeController.redirectToIndex("en");
//    }

}