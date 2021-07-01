import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css'],
})
export class ListCommentComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private router: Router, private commentService: CommentService) {}

  ngOnInit(): void {
    this.loadDataComment();
  }

  loadDataComment() {
    this.commentService
      .getCommentList()
      .subscribe((comments) => (this.comments = comments));
  }

  deleteComment(comment: Comment) {
    this.commentService.deleteComment(comment.id).subscribe((data) => {
      this.loadDataComment();
    });
  }

  updateComment(comment: Comment) {
    this.router.navigate(['UpdateComment', comment.id]);
  }
}
