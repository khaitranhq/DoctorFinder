package com.leoaslan.docfind.repository;
//
import com.leoaslan.docfind.model.DetailAppointment;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//import javax.persistence.Entity;
//import javax.persistence.EntityManager;
//import javax.persistence.PersistenceContext;
//import javax.transaction.Transactional;
//import java.sql.Timestamp;
//
//@Repository
////@Transactional
//public class DetailAppointmentRepository{
//    //@Modifying
//    //@Query("INSERT INTO DetailAppointment (doctorid, patientid, appointmentDate) VALUES (?,?,?,?)")
//    //@Query("INSERT INTO DetailAppointment VALUES (doctorid, patientid, appointmentDate)")
//    //void InsertAppointment (@Param("doctorid") int DoctorID, @Param("PatientID") int patientid, @Param("appointmentDate") Timestamp appointmentDate);
//    @PersistenceContext
//    private EntityManager entityManager;
//    @Transactional
//    public void makeAppointment(DetailAppointment detailAppointment) {
//        entityManager.createQuery("INSERT INTO DetailAppointment (doctorid, patientid, appointmentDate) VALUES (?,?,?,?)")
//                .setParameter(1, detailAppointment.getDoctorid())
//                .setParameter(2, detailAppointment.getPatientid())
//                .setParameter(3, detailAppointment.getAppointmentDate())
//                .executeUpdate();
//    }
//}

public interface DetailAppointmentRepository extends JpaRepository <DetailAppointment, Long> {

}
