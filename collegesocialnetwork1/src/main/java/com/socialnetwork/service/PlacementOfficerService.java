package com.socialnetwork.service;

import java.util.List;

import com.socialnetwork.entity.PlacementOfficer;
import com.socialnetwork.entity.PlacementOfficerDTO;
import com.socialnetwork.exception.PlacementOfficerNotFoundException;



public interface PlacementOfficerService {
	public PlacementOfficer addPlacementOfficer(PlacementOfficer reg);
	public PlacementOfficer updatePlacementOfficer(PlacementOfficerDTO placementOfficerDTO) throws PlacementOfficerNotFoundException;
	public String deletePlacementOfficerByStudentId(Integer studentId) throws PlacementOfficerNotFoundException;
	public PlacementOfficer getPlacementOfficerById(Integer studentId) throws PlacementOfficerNotFoundException;
	public List<PlacementOfficer> getAllPlacementOfficer();
	PlacementOfficer updatePlacementOfficerDTO();
	String deletePlacementOfficerById(Integer id) throws PlacementOfficerNotFoundException;
	PlacementOfficer addPlacementOfficer1(PlacementOfficer placementOfficer);
	

}