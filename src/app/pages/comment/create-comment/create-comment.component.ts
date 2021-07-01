import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css'],
})
export class CreateCommentComponent implements OnInit {
  comment: Comment = new Comment();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {}

  insertComment() {
    this.commentService.createComment(this.comment).subscribe(
      (datos) => console.log(datos),
      (error) => console.log(error)
    );
    this.comment = new Comment();
    this.router.navigate(['ListComment']);
  }
}
