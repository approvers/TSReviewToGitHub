import * as fs from "fs";
import axios from "axios";

class TSReveiwToGitHub {
  private headers: object;

  constructor(
    username: string,
    token: string,
    private org: string,
    private repo: string
  ) {
    this.headers = {
      auth: {
        username,
        password: token,
      },
      "Content-Type": "application/json",
    };
  }

  public createIssue = (title: string, body: string) => {
    const url: string = `https://api.github.com/repos/${this.org}/${this.repo}/issues`;
    axios
      .post(
        url,
        {
          title,
          body,
        },
        this.headers
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

const buffer = fs.readFileSync(".env");
const instance = new TSReveiwToGitHub(
  "isso0424",
  buffer.toString().split("\n")[0],
  "isso0424",
  "dotfiles"
);
instance.createIssue("test", "example");
