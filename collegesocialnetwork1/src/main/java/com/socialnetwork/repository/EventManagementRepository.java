package com.socialnetwork.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.socialnetwork.entity.EventManagement;



public interface EventManagementRepository  extends JpaRepository<EventManagement,Integer> {

}
