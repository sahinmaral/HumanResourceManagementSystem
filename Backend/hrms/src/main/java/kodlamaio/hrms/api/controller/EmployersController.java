package kodlamaio.hrms.api.controller;

import kodlamaio.hrms.business.abstracts.EmployerService;
import kodlamaio.hrms.core.utilities.result.DataResult;
import kodlamaio.hrms.core.utilities.result.Result;
import kodlamaio.hrms.core.entities.Employer;
import kodlamaio.hrms.entities.dtos.UserForVerifyVerificationCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/employers")
public class EmployersController {

    private EmployerService employerService;

    @Autowired
    public EmployersController(EmployerService employerService) {
        this.employerService = employerService;
    }

    @GetMapping("/getAll")
    public DataResult<List<Employer>> getAll(){
        return employerService.getAll();
    }

    @PostMapping("/register")
    public Result register(@RequestBody Employer employer){
        return employerService.register(employer);
    }

    @PostMapping("/verifyAccountByVerificationCode")
    public Result verifyAccount(@RequestBody UserForVerifyVerificationCode user){
        return employerService.verifyAccountByVerificationCode(user.getEmail(),user.getCode());
    }


}
