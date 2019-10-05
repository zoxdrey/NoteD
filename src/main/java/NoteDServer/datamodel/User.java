package NoteDServer.datamodel;

import java.io.FileWriter;
import java.io.IOException;

public class User {

    private Integer id;
    private String login;
    private String password;

    public User(String name, String email) {

        this.login = name;
        this.password = email;
    }

    public String getLogin() {
        return login;
    }

    public String getPassword() {
      return password;
    }

  public void setLogin(String login) {
    this.login = login;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getId() {
      return id;
    }
}
