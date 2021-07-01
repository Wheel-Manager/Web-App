import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-find-comment',
  templateUrl: './find-comment.component.html',
  styleUrls: ['./find-comment.component.css'],
})
export class FindCommentComponent implements OnInit {
  id: number = 0;
  publicationDate: string = '';
  comment: Comment = new Comment();
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  searchCommentById() {
    this.commentService.getCommentById(this.id).subscribe((comment) => {
      console.log(comment);
      this.comment = comment;
    });
  }

  searchCommentByPublicationDate() {
    this.commentService
      .getCommentByPublicationDate(this.publicationDate)
      .subscribe((comments) => {
        console.log(comments);
        this.comments = comments;
      });
  }
}
