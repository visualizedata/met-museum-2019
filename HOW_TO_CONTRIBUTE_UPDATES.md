# How to contribute updates to this repository

It is recommended to follow the best practices detailed in the MS Data Visualization GitHub workflow document found at https://github.com/visualizedata/github-workflow

---

Please be mindful of keeping your project links active. Please submit a pull request with your new project URL if you relocate your work to a different domain name or hosting provider.

---

Project data is stored in the [data.json](./data.json) file located in the root directory.

The JSON object contains two arrays: "projects" and "students"

Projects follow this template:

```
{
  "title": "A Nice Title",
  "title_full": "A Nice Title: Additional Subtitle Text",
  "description": "",
  "url": "https://<URL TO PROJECT>",
  "author": "Student Name",
  "image": "<IMG FILE NAME>.jpg"
}
```

Author fields should have an **exact text match** to an entry in the `students` array.
Image urls are relative to the `/img/` folder.

Student entries follow this template:

```
{
  "name": "Student Name",
  "url": "<STUDENT PERSONAL URL>"
}
```

---

### Workflow for contributing to MS Data Visualization repositories

1. Initial setup:

   - [Fork a repository, create a local clone of your fork, and configure Git to sync your fork with the original repository](https://help.github.com/articles/fork-a-repo/)

2. In the local clone of your fork, [create a branch for your edits](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).  
   `git branch mybranch` creates a branch named _mybranch_  
   `git checkout mybranch` switches to the branch _mybranch_

   - Do all your work in this branch.
   - [Push your branch](https://help.github.com/articles/pushing-to-a-remote/) to the forked repo early and often.
   - Never work in the `master` branch!

3. [Pull in changes often from the `upstream master` to keep it synced](https://help.github.com/articles/syncing-a-fork/) so that when you prepare your pull request, merge conflicts will be less likely. Again, never work in the `master` branch!

4. [Merge the fork master into the fork branch](https://stackoverflow.com/a/16957483) and, if applicable, [resolve any merge conflicts](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/).  
   `git merge <branch>` merges the specified branch into the current branch.

5. When you are ready for your contributions to be considered, open a [Pull Request](https://help.github.com/articles/creating-a-pull-request/) in GitHub. The Pull Request should be for the up-to-date **branch** of your fork. Prior to submitting the Pull Request, make sure you have:
   - Synced the fork master with the latest version of the upstream master (#3).
   - Merged the fork master to the fork branch and resolved any merge conflicts (#4).

### Tips

Use [GitHub issues](https://guides.github.com/features/issues/) to log problems and communicate.

Sometimes, you mess up and need to go back to a previous commit. [Use `revert`](https://www.atlassian.com/git/tutorials/undoing-changes/git-checkout). Do not use `reset`! Here's a helpful [Stack Overflow answer](http://stackoverflow.com/questions/4114095/how-to-revert-git-repository-to-a-previous-commit).

### Helpful resources

- [Introduction to GitHub Flow](https://guides.github.com/introduction/flow/)
- [GitHub Help: Collaborating on projects using issues and pull requests](https://help.github.com/categories/collaborating-on-projects-using-issues-and-pull-requests/)
- [GitHub Guides: contributing to open source](https://guides.github.com/activities/contributing-to-open-source/)
