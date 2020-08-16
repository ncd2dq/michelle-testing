The official home of Michelle Garcia


Repos:
volante (main) (origin master)
michelle-testing (staging) (stagging-branch)

# CSS
https://css-tricks.com/snippets/css/complete-guide-grid/

For development
1. Commit to `staging-branch`
2. `git push staging staging-branch`
3. Raise a PR on `michelle-testing`: staging-branch -> master (gets it to show live on staging)
4. See changes https://ncd2dq.github.io/michelle-testing/

# DO NOT TOUCH ANYTHING IN VOLANTE/

For production deployment
1. `git checkout develop`
2. `git merge origin/staging-branch`
3. `git push origin develop`
4. Raise a PR on `volante` : develop -> master
