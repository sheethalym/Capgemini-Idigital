import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private router:Router,private formBuilder:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
  onSubmit(){
  //   this.http.get<any>( 'http://localhost:8095/admins').subscribe(res=>{
  //     const user=res.find((a:any)=>{
  //       return a.userName===this.loginForm.value.userName && a.password===this.loginForm.value.password
  //     })
  //     if(user){
     
  //       this.router.navigate(['/dashboard']);
  //     }
  //  })
  const user=this.loginForm.value.userName==='admin' && this.loginForm.value.password==='admin';
  if(user){
     
          this.router.navigate(['/dashboard']);
        }
    
   }

}
