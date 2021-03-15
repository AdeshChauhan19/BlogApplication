import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Blog} from './blog.model'
import { CommentStructure } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  selectedBlog:Blog={
    title:'',
    description:'',
   }
  

 constructor(public http:HttpClient) { }

  postBlog(blog:Blog){
    return this.http.post('http://localhost:3000/posts',blog)
  }

  public getBlog()
  {
    // console.log(this.showService.pgData);
    return this.http.get("http://localhost:3000/posts")
  }
  public getBlogById(id){
    return this.http.get("http://localhost:3000/posts/"+id)
  }

  public getAllBlog(){
    return this.http.get("http://localhost:3000/admin/allpost")
  }

  public getApprovedBlog(id){
    return this.http.get("http://localhost:3000/admin/approved/"+id)
  }

  public getDeleteBlog(id){
    return this.http.delete("http://localhost:3000/posts/"+id)
  }

  public getApprovedPost(){
    return this.http.get("http://localhost:3000/post")
  }

  public getUpdatePost(id,blog:Blog){
    return this.http.patch("http://localhost:3000/posts/"+id,blog);
  }

  public postCommentonPost(id,newComment:CommentStructure){
    return this.http.post("http://localhost:3000/posts/"+id+"/comments",newComment);
  }

  public postCommentReplies(cardid,commentid,replycomment:CommentStructure){
    return this.http.post("http://localhost:3000/posts/"+cardid+"/comments/"+commentid+"/replies",replycomment);
  }
}
