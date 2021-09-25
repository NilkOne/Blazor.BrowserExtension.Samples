# Contributing to this repository

## We Develop with Github
We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Report bugs using Github's issues
We use GitHub issues to track bugs. Report a bug by opening a new issue.

## Write bug reports with detail, background, and sample code
Great Bug Reports tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or what you have tried that didn't work)

## We Use Github Flow, So All Code Changes Happen Through Pull Requests
Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from main.
0. If you've added code that should be tested, add tests.
0. Ensure the test suite passes.
0. Create a pull request!

## Working in this repository
Each sample project has a `dist` and `src` directory, where 
- the `dist` directory contains the published output and can be loaded in the browser directly.
- the `src` directory contains the source files that can be compiled and published.

Therefore, any changes in the sample project source files means that the project needs to be published again.
This can be done with `dotnet publish --configuration Release` in the project directory.

### Use a Consistent Coding Style
- 4 spaces (C#) or 2 spaces (XML/JSON/JS) for indentation rather than tabs.
- Every `if`, `else`, `for`, `foreach`, `while` etc should have its own opening and closing bracket, even if it is a single line statement.
- Every code file changed should be formatted properly (CTRL+K, CTRL+D in VS or ALT+SHIFT+F in VS Code).

## License
By contributing, you agree that your contributions will be licensed under its MIT License.