package com.socialnetwork.service;
import java.util.List;

import javax.validation.Valid;

import com.socialnetwork.entity.EventManagement;
import com.socialnetwork.entity.EventManagementDTO;
import com.socialnetwork.exception.EventManagementNotFoundException;



public interface EventManagementService {

	public EventManagement addEventManagement(EventManagement eventManagement);

	public EventManagement updateEventManagement(EventManagementDTO eventManagementDTO)throws EventManagementNotFoundException;

	public List<EventManagement> showEventManagements();

	public EventManagement getEventManagementById(@Valid Integer eventManagementId) throws EventManagementNotFoundException;

	public EventManagement deleteEventManagementById(Integer id) throws EventManagementNotFoundException;

	

	





}
