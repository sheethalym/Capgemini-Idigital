package com.socialnetwork.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.socialnetwork.entity.PlacementOfficer;
import com.socialnetwork.entity.PlacementOfficerDTO;
import com.socialnetwork.exception.PlacementOfficerNotFoundException;
import com.socialnetwork.repository.PlacementOfficerRepository;

@Service
public class PlacementOfficerServiceImp implements PlacementOfficerService {
	@Autowired
	private PlacementOfficerRepository placementOfficerRepo;

	@Override

	public PlacementOfficer addPlacementOfficer(PlacementOfficer placementOfficer) {
		return this.placementOfficerRepo.save(placementOfficer);
	}

	@Override
	public PlacementOfficer updatePlacementOfficer(PlacementOfficerDTO placementOfficerDTO)
			throws PlacementOfficerNotFoundException {
		Optional<PlacementOfficer> placementOfficerOpt = this.placementOfficerRepo
				.findById(placementOfficerDTO.getStudentId());
		if (placementOfficerOpt.isEmpty())
			throw new PlacementOfficerNotFoundException(" id does not Exist");

		PlacementOfficer updatePlacementOfficer = placementOfficerOpt.get();
		updatePlacementOfficer.setRequirements(placementOfficerDTO.getRequirements());
		updatePlacementOfficer.setPlaceStudent(placementOfficerDTO.getPlacedStudent());
		return this.placementOfficerRepo.save(updatePlacementOfficer);
	}

	@Override
	public String deletePlacementOfficerById(Integer studentId) throws PlacementOfficerNotFoundException {
		Optional<PlacementOfficer> placementOfficerOpt = this.placementOfficerRepo.findById(studentId);
		if (placementOfficerOpt.isEmpty())
			throw new PlacementOfficerNotFoundException(" id not exist to delete");
		this.placementOfficerRepo.deleteById(studentId);
		return "Deleted successfully";
	}

	public PlacementOfficer getPlacementOfficerById(Integer studentId) throws PlacementOfficerNotFoundException {
		Optional<PlacementOfficer> placementOfficerOpt = this.placementOfficerRepo.findById(studentId);
		if (placementOfficerOpt.isEmpty())
			throw new PlacementOfficerNotFoundException(" id does not Exist");
		return placementOfficerOpt.get();
	}

	@Override
	public List<PlacementOfficer> getAllPlacementOfficer() {
		return this.placementOfficerRepo.findAll();
	}

	@Override
	public String deletePlacementOfficerByStudentId(Integer studentId) throws PlacementOfficerNotFoundException {
		Optional<PlacementOfficer> placementOfficerOpt = this.placementOfficerRepo.findById(studentId);
		if (placementOfficerOpt.isEmpty())
			throw new PlacementOfficerNotFoundException(" id not exist to delete");
		this.placementOfficerRepo.deleteById(studentId);
		return "Deleted successfully";

	}

	@Override
	public PlacementOfficer updatePlacementOfficerDTO() {
		return null;
	}

	@Override
	public PlacementOfficer addPlacementOfficer1(PlacementOfficer placementOfficer) {
		return null;
	}

}