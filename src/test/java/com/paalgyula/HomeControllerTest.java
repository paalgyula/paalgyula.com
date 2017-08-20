package com.paalgyula;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
public class HomeControllerTest {

    private HomeController homeController;

    @Before
    public void setUp() throws Exception {
        this.homeController = new HomeController();
    }

    @Test
    public void showMainPage() throws Exception {
        homeController.showMainPage();
    }

    @Test
    public void redirect_to_main_page() throws Exception {
        homeController.redirectToIndex("hu");
        homeController.redirectToIndex("en");
    }

}