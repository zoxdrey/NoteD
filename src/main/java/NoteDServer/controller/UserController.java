package NoteDServer.controller;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import NoteDServer.datamodel.User;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    @CrossOrigin
    @RequestMapping("/getusers")
    public List<User> getUsers() throws IOException {
      BufferedReader br = new BufferedReader(new FileReader("notes3.txt"));
      List<User> users = new ArrayList<User>();
      String line = null;
      while ((line = br.readLine()) != null) {

        String[] splitstring = line.split(";");
        users.add(new User( splitstring[0] , splitstring[1]));
      }
      br.close();
      return users;
    }

  @CrossOrigin
  @PostMapping("/create")
    public void createUser(@RequestBody User newUser) throws IOException {
      writeUserInFile(newUser);
    }

  @CrossOrigin
  public void writeUserInFile(User user) throws IOException {
    FileWriter writer = new FileWriter("notes3.txt", true);
    writer.write(user.getLogin() +";"+ user.getPassword()+"\n");
    writer.flush();
  }
}
