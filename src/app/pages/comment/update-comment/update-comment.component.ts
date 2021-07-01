import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css'],
})
export class UpdateCommentComponent implements OnInit {
  id: number = 0;
  comment: Comment = new Comment();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.commentService.getCommentById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.comment = datos;
      },
      (error) => console.log(error)
    );
  }

  updateComment() {
    this.commentService.updateComment(this.id, this.comment).subscribe(
      (datos) => {
        console.log(datos);
        this.router.navigate(['ListComment']);
      },
      (error) => console.log(error)
    );
    this.comment = new Comment();
  }
}
