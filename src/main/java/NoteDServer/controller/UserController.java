package NoteDServer.controller;

import java.util.List;
import NoteDServer.datamodel.User;
import NoteDServer.services.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {

  @Autowired
  private UserRepository userRepository;

  @GetMapping("/getusers")
  public List<User> getUsers(){
    return userRepository.findAll();
  }

  @PostMapping("/createuser")
  public @ResponseBody String createUser(@RequestBody User newUser){
    userRepository.save(newUser);
    return "Success create:";
  }


  @GetMapping("/getuser/{id}")
  public User getUser(@PathVariable int id) {
      return userRepository.getOne(id);
  }
}




