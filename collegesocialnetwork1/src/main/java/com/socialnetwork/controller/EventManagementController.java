package com.socialnetwork.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.socialnetwork.entity.EventManagement;
import com.socialnetwork.entity.EventManagementDTO;
import com.socialnetwork.exception.EventManagementNotFoundException;
import com.socialnetwork.service.EventManagementService;



@RestController
@RequestMapping
public class EventManagementController {

	@Autowired
	private EventManagementService eventManagementService;
	
	@PostMapping("eventmanagement")
	public EventManagement addeventmanagement(@Valid@RequestBody EventManagementDTO eventManagementDTO){
		EventManagement eventManagement = new EventManagement(eventManagementDTO.getEventID(), eventManagementDTO.getEventName(), eventManagementDTO.getEventSponser(), eventManagementDTO.getVenue());
				return this.eventManagementService.addEventManagement(eventManagement);
	}

	@PutMapping("eventmanagement")
	public EventManagement updateeventManagement(@RequestBody EventManagementDTO eventManagementDTO) throws EventManagementNotFoundException {
		return this.eventManagementService.updateEventManagement(eventManagementDTO);
	}
	
	@GetMapping("eventmanagements")
	public List<EventManagement> getAllEventManagements(){
		return this.eventManagementService.showEventManagements();
	}
	
	@GetMapping("eventmanagement/{id}")
	public EventManagement getEventManagementDetailsById(@Valid@PathVariable("id") Integer eventManagementId) throws EventManagementNotFoundException {
		return this.eventManagementService.getEventManagementById(eventManagementId);
		
	}
	@DeleteMapping("eventmanagement/{id}")
	public EventManagement deleteEventManagementById(@PathVariable("id") Integer id )throws EventManagementNotFoundException {
		return this.eventManagementService.deleteEventManagementById(id);
	
	}
}

