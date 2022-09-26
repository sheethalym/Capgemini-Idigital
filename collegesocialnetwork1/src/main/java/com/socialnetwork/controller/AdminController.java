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

import com.socialnetwork.entity.Admin;
import com.socialnetwork.entity.AdminDTO;
import com.socialnetwork.exception.AdminNotFoundException;
import com.socialnetwork.service.AdminService;


@RestController
@RequestMapping
public class AdminController {

	
	@Autowired
	private AdminService adminService;
	
	@PostMapping("admin")
	public Admin addadmin(@Valid@RequestBody AdminDTO adminDTO){
		Admin admin = new Admin(adminDTO.getUserId(), adminDTO.getUserPassword(), null, null, null, null, null);
				return this.adminService.addAdmin(admin);
	}

	@PutMapping("admin")
	public Admin updateadmin(@RequestBody AdminDTO adminDTO) throws AdminNotFoundException {
		return this.adminService.updateAdmin(adminDTO);
	}
	
	@GetMapping("admins")
	public List<Admin> getAllAdmins(){
		return this.adminService.showAdmins();
	}
	
	@GetMapping("admin/{id}")
	public Admin getAdminDetailsById(@Valid@PathVariable("id") Integer adminId) throws AdminNotFoundException {
		return this.adminService.getAdminById(adminId);
		
	}
	@DeleteMapping("admin/{id}")
	public Admin deleteAdminById(@PathVariable("id") Integer id )throws  AdminNotFoundException {
		return this. adminService.deleteAdminById(id);
	
	}
	
}
