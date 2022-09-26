package com.socialnetwork.service;

import java.util.List;

import javax.validation.Valid;

import com.socialnetwork.entity.Admin;
import com.socialnetwork.entity.AdminDTO;


public interface AdminService {

	Admin addAdmin(Admin admin);

	Admin updateAdmin(AdminDTO adminDTO);

	List<Admin> showAdmins();

	Admin getAdminById(@Valid Integer adminId);

	Admin deleteAdminById(Integer id);

}
