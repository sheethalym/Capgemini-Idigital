package com.socialnetwork.service;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.socialnetwork.entity.EventManagement;
import com.socialnetwork.entity.EventManagementDTO;
import com.socialnetwork.exception.EventManagementNotFoundException;
import com.socialnetwork.repository.EventManagementRepository;



@Service
public class EventManagementImpl implements EventManagementService {
	
	@Autowired
	private EventManagementRepository eventManagementRepo;
	
	@Override
	public EventManagement addEventManagement(EventManagement eventManagement) {
		return this.eventManagementRepo.save(eventManagement);
	}
	
	@Override
	public EventManagement updateEventManagement(EventManagementDTO eventManagementDTO) throws EventManagementNotFoundException {
		Optional<EventManagement> eventManagementOpt = this.eventManagementRepo.findById(eventManagementDTO.getEventID());
		if(eventManagementOpt.isEmpty())
			throw new EventManagementNotFoundException("EventManagement id does not exist to update. ");
		EventManagement updateEventManagement = eventManagementOpt.get();
		updateEventManagement.setEventName(eventManagementDTO.getEventName());
		updateEventManagement.setEventSponser(eventManagementDTO.getEventSponser());
		updateEventManagement.setVenue(eventManagementDTO.getVenue());
        return this.eventManagementRepo.save(updateEventManagement);
		
		
	}
	
	@Override
	public List<EventManagement> showEventManagements() {
		
		return this.eventManagementRepo.findAll();
	}

	@Override
	public EventManagement getEventManagementById(@Valid Integer eventManagementId) throws EventManagementNotFoundException {
		Optional<EventManagement> eventManagementOpt=this.eventManagementRepo.findById(eventManagementId);
		if(eventManagementOpt.isEmpty())
			throw new EventManagementNotFoundException("Id Not Found ");
		return eventManagementOpt.get();
	}

	@Override
	public EventManagement deleteEventManagementById(Integer id) throws EventManagementNotFoundException {
		Optional<EventManagement> opteventManagement = this.eventManagementRepo.findById(id);
		if(opteventManagement.isEmpty())
			throw new EventManagementNotFoundException("EventManagement Id does not exists to delete.");
		this.eventManagementRepo.deleteById(id);
		return opteventManagement.get();
	}
	

	
}
