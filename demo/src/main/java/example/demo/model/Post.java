package example.demo.model;

import lombok.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@RequiredArgsConstructor
@Entity
@Table(name = "post")

public class Post {
    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String content;
}

