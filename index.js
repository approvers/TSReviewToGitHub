define("index", ["require", "exports", "fs", "axios"], function (require, exports, fs, axios_1) {
    "use strict";
    exports.__esModule = true;
    var TSReveiwToGitHub = /** @class */ (function () {
        function TSReveiwToGitHub(username, token, org, repo) {
            var _this = this;
            this.org = org;
            this.repo = repo;
            this.createIssue = function (title, body) {
                var url = "https://api.github.com/repos/" + _this.org + "/" + _this.repo + "/issues";
                axios_1["default"]
                    .post(url, {
                    title: title,
                    body: body
                }, _this.headers)
                    .then(function (data) {
                    console.log(data);
                })["catch"](function (err) {
                    console.log(err);
                });
            };
            this.headers = {
                auth: {
                    username: username,
                    password: token
                },
                "Content-Type": "application/json"
            };
        }
        return TSReveiwToGitHub;
    }());
    var buffer = fs.readFileSync(".env");
    var instance = new TSReveiwToGitHub("isso0424", buffer.toString().split("\n")[0], "isso0424", "dotfiles");
    instance.createIssue("test", "example");
});
