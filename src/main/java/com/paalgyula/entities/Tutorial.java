package com.paalgyula.entities;

import javax.persistence.*;

/**
 * Created by paalgyula on 2017. 05. 26..
 */
@Entity
@Table(name = "TUTORIAL")
public class Tutorial {
    @Id
    @GeneratedValue
    @Column(name = "ID", nullable = false, unique = true)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
