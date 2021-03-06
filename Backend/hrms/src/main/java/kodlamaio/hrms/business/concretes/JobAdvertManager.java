package kodlamaio.hrms.business.concretes;
import kodlamaio.hrms.business.abstracts.JobAdvertService;
import kodlamaio.hrms.business.constants.Messages;
import kodlamaio.hrms.business.validationRules.CityValidator;
import kodlamaio.hrms.business.validationRules.EmployerValidator;
import kodlamaio.hrms.business.validationRules.JobAdvertValidator;
import kodlamaio.hrms.business.validationRules.JobPositionValidator;
import kodlamaio.hrms.core.utilities.result.*;
import kodlamaio.hrms.dataAccess.abstracts.*;
import kodlamaio.hrms.entities.concretes.JobAdvert;
import kodlamaio.hrms.entities.dtos.JobAdvertDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class JobAdvertManager implements JobAdvertService {

    @Autowired
    public JobAdvertManager(JobAdvertDao jobAdvertDao,
                            CityDao cityDao,
                            JobPositionDao jobPositionDao,
                            EmployerDao employerDao,
                            UserDao userDao) {
        this.jobAdvertDao = jobAdvertDao;
        this.cityDao = cityDao;
        this.jobPositionDao = jobPositionDao;
        this.employerDao=employerDao;
        this.userDao = userDao;
    }
    private UserDao userDao;
    private CityDao cityDao;
    private JobPositionDao jobPositionDao;
    private JobAdvertDao jobAdvertDao;
    private EmployerDao employerDao;

    @Override
    public DataResult<List<JobAdvert>> getAll() {
        return new SuccessDataResult<List<JobAdvert>>(jobAdvertDao.findAll(), Messages.SuccessfullyRetrieved);
    }


    @Override
    public Result add(JobAdvert jobAdvert) {

        JobAdvertValidator advertValidator = new JobAdvertValidator(jobAdvertDao);
        CityValidator cityValidator = new CityValidator(cityDao);
        JobPositionValidator jobPositionValidator = new JobPositionValidator(jobPositionDao);
        EmployerValidator employerValidator = new EmployerValidator(employerDao,userDao);

        Result[] validators = new Result[]{
                cityValidator.isCityExist(jobAdvert.getCities().getId()),
                jobPositionValidator.isJobPositionExist(jobAdvert.getJobPositions().getId()),
                employerValidator.isEmployerExist(jobAdvert.getEmployers().getId())
        };

        for (var validator : validators){
            if (!validator.isSuccess())
                return new ErrorResult(validator.getMessage());
        }

        jobAdvertDao.save(jobAdvert);
        return new SuccessResult(Messages.SuccessfullyAdded);
    }

    @Override
    public Result disableById(int jobAdvertId) {

        JobAdvertValidator validator = new JobAdvertValidator(jobAdvertDao);
        Result[] validators = new Result[]{
                validator.isAdvertExist(jobAdvertId),
                validator.getAdvertIsActive(jobAdvertId)
        };

        for (var item : validators) {
            if (!item.isSuccess())
                return new ErrorResult(item.getMessage());
        }

        JobAdvert foundAdvert = jobAdvertDao.findById(jobAdvertId);
        foundAdvert.setActive(false);
        jobAdvertDao.save(foundAdvert);
        return new SuccessResult(Messages.JobAdvertDisabled);
    }

    @Override
    public Result enableById(int jobAdvertId) {
        JobAdvertValidator validator = new JobAdvertValidator(jobAdvertDao);
        Result[] validators = new Result[]{
                validator.isAdvertExist(jobAdvertId),
                validator.getAdvertIsPassive(jobAdvertId)
        };

        for (var item : validators) {
            if (!item.isSuccess())
                return new ErrorResult(item.getMessage());
        }

        JobAdvert foundAdvert = jobAdvertDao.findById(jobAdvertId);
        foundAdvert.setActive(true);
        jobAdvertDao.save(foundAdvert);
        return new SuccessResult(Messages.JobAdvertEnabled);
    }

    @Override
    public DataResult<List<JobAdvert>> getActivatedAdverts() {
        return null;
    }

    @Override
    public DataResult<JobAdvertDto> getJobAdvertById(int jobAdvertId) {
        return new SuccessDataResult<JobAdvertDto>(jobAdvertDao.getJobAdvertById(jobAdvertId));
    }


    @Override
    public DataResult<List<JobAdvertDto>> getAllActiveAdsByDetails() {
        return new SuccessDataResult<List<JobAdvertDto>>
                (jobAdvertDao.getAllActiveAdsByDetails(), Messages.SuccessfullyRetrieved);
    }

    @Override
    public DataResult<List<JobAdvertDto>> getAllActiveAdsByDeadline(LocalDate deadline) {
        return new SuccessDataResult<List<JobAdvertDto>>
                (jobAdvertDao.getAllActiveAdsByDeadline(deadline), Messages.SuccessfullyRetrieved);
    }

    @Override
    public DataResult<List<JobAdvertDto>> getAllActiveAdsByEmployerId(int employerId) {
        return new SuccessDataResult<List<JobAdvertDto>>
                (jobAdvertDao.getAllActiveAdsByEmployerId(employerId), Messages.SuccessfullyRetrieved);
    }

    @Override
    public DataResult<List<JobAdvertDto>> getAllAdsByDetails() {
        return new SuccessDataResult<List<JobAdvertDto>>
                (jobAdvertDao.getAllAdsByDetails(), Messages.SuccessfullyRetrieved);
    }
}
