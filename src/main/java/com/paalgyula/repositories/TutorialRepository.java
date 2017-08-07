package com.paalgyula.repositories;

import com.paalgyula.entities.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by paalgyula on 2017. 05. 26..
 */
public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
}
