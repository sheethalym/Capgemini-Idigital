import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventModel } from './eventModel';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {

  student:any=[]
  studentobj: EventModel = new EventModel;
  
  btnUpdateShow:boolean = false;
  
  btnSaveShow:boolean = true;
  constructor(private dialog:MatDialog,private fb:FormBuilder,private http:HttpClient,private router:Router) { }
     studentForm!: FormGroup
    ngOnInit(): void {
      this.getStudent()
      this.studentForm=this.fb.group({
      eventName:['',[Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
      eventSponser:['',[Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
      venue:['',[Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],

     
        }) 
        this.getStudent()
       
       }
    
    
    getStudent(){
      this.http.get<any>( 'http://localhost:8095/eventmanagements').subscribe(res=>{
        this.student = res;
      })
    }
    
    
    AddStudent(){
     
      if(this.studentForm.valid){
        this.http.post<any>('http://localhost:8095/eventmanagement',this.studentForm.value).subscribe(res=>{
          alert("Data Saved")
          this.getStudent();
          this.studentForm.reset();
        })
       
       
       }
  
    }
  
    EditStudent(data:any){
      this.studentobj.eventID = data.eventID;
      this.studentForm.controls['eventName'].setValue(data.eventName);
      this.studentForm.controls['eventSponser'].setValue(data.eventSponser);
      this.studentForm.controls['venue'].setValue(data.venue);
      this.UpdateShowBtn();
    }
  
    UpdateStudent(){
      this.studentobj.eventID= this.studentobj.eventID,
      this.studentobj.eventName = this.studentForm.value.eventName,
      this.studentobj.eventSponser = this.studentForm.value.eventSponser,
      this.studentobj.venue = this.studentForm.value.venue,
      
      this.http.put<any>('http://localhost:8095/eventmanagement',this.studentobj).subscribe(res=>{
     
        alert("Data Updated");
        this.getStudent();
        this.SaveShowBtn();
      })
  
  
    }
    get f(){  
      return this.studentForm.controls;  
    }
  
    DeleteStudent(data:any){
      this.http.delete<any>(`http://localhost:8095/eventmanagement/${data.eventID}`).subscribe(res=>{
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