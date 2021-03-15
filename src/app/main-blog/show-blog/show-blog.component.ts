import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../shared/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import {CommentStructure} from '../../shared/comment.model'
import Swal from 'sweetalert2'


@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})

export class ShowBlogComponent implements OnInit {
  idofComment:Array<Object>;
  currentUrl;
  blog;
  idComment:any;
  variableName: any;
  hideme:boolean=false;

  constructor(public blogService:BlogService,public activatedRoute: ActivatedRoute,private router: Router,public userService:UserService) { }
  
  ngOnInit(): void {
    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
     // Function to GET current blog with id in params
    this.blogService.getBlogById(this.currentUrl.id).subscribe(data => {
      // Check if GET request was success or not
      this.blog = data;
 
     });
}



newcomment:CommentStructure=new CommentStructure('');
postComment(id){
  if(this.newcomment.content){
    let response=this.blogService.postCommentonPost(id,this.newcomment)
    response.subscribe((data)=>{
      Swal.fire({
        icon: 'success',
        text: 'Your Comment has been posted',
      })
      this.newcomment.content='';
      this.ngOnInit();
    })
  }
  else
  {
    Swal.fire({
      icon: 'error',
      text: 'Please provide Comment',
    })
  }
 
}

replycomment:CommentStructure=new CommentStructure('');
onDoreply(cardid,commentid){
  if(this.replycomment.content){
    let response=this.blogService.postCommentReplies(cardid,commentid,this.replycomment);
    response.subscribe((data)=>{
      Swal.fire({
        icon: 'success',
        text: 'Your Reply has been posted',
      })
      this.replycomment.content='';
      this.ngOnInit();
    })
  }
  else
  {
    Swal.fire({
      icon: 'error',
      text: 'Please provide Reply',
    })
  }
  
}

textAreasList:any = [];

    addTextarea(id){   
      if(this.idComment===id) 
      {
        this.textAreasList.push('text_area'+ (this.textAreasList.length + 1));
      }    
        
    }

    removeTextArea(index){
      this.textAreasList.splice(index, 1);
  }

  public show:boolean = false;
  public buttonName:any = 'Reply';
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Reply";
    else
      this.buttonName = "Reply";
  }

onLogout(){
  this.userService.deleteToken()
  this.router.navigateByUrl('/login');
}
}
