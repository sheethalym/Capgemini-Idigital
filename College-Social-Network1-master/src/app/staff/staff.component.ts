import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StaffModel } from './staffModel';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  student:any=[]
  studentobj: StaffModel = new StaffModel;
  
  btnUpdateShow:boolean = false;
  
  btnSaveShow:boolean = true;
  constructor(private fb:FormBuilder,private http:HttpClient) { }
     studentForm!: FormGroup
    ngOnInit(): void {
      
      this.getStudent()
      this.studentForm=this.fb.group({                 
      staffName:['',[Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
      staffBranch:['',[Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
      staffEmailId:['',Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")],
     
        }) 
        this.getStudent()
       
       }
       get f(){  
        return this.studentForm.controls;  
      }
    
    getStudent(){
      this.http.get<any>( 'http://localhost:8095/staff').subscribe(res=>{
        this.student = res;
      })
    }
    
    
    AddStudent(){
     
      if(this.studentForm.valid){
        this.http.post<any>(  'http://localhost:8095/staff' ,this.studentForm.value).subscribe(res=>{
          alert("Data Saved")
          this.getStudent();
          this.studentForm.reset();
        })
       
       
       }
  
    }
  
    EditStudent(data:any){
      this.studentobj.staffId = data.staffId;
      this.studentForm.controls['staffName'].setValue(data.staffName);
      this.studentForm.controls['staffBranch'].setValue(data.staffBranch);
      this.studentForm.controls['staffEmailId'].setValue(data.staffEmailId);
      this.UpdateShowBtn();
    }
    
    UpdateStudent(){
      this.studentobj.staffId= this.studentobj.staffId,
      this.studentobj.staffName = this.studentForm.value.staffName,
      this.studentobj.staffBranch = this.studentForm.value.staffBranch,
      this.studentobj.staffEmailId = this.studentForm.value.staffEmailId,
      
      this.http.put<any>(  'http://localhost:8095/staff',this.studentobj).subscribe(res=>{
     
        alert("Data Updated");
        this.getStudent();
        this.SaveShowBtn();
      })
  
  
    }
  
  
    DeleteStudent(data:any){
      this.http.delete<any>(  `http://localhost:8095/staff/${data.staffId}`).subscribe(res=>{
        alert("Record Deleted");
        this.getStudent();
      })
  
    }
  
    UpdateShowBtn()
    {
      this.btnUpdateShow = true;
      this.btnSaveShow = false;
    }
    SaveShowBtn()
    {
      this.btnUpdateShow = false;
      this.btnSaveShow = true;
    }
  
  }