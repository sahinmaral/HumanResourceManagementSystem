package kodlamaio.hrms.entities.concretes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="working_places")

public class WorkingPlaces {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @NotNull
    @Column(name="name", unique = true)
    private String name;

    @OneToMany(mappedBy = "workingPlaces" , fetch = FetchType.LAZY)
    private List<JobAdvert> jobAdvert;

}
