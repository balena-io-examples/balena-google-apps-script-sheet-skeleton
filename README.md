# balena-google-apps-script-sheet-skeleton
Skeleton template for google apps script sheets projects.

## :package: Getting Started
0. Clone this repository & run `npm install`.
1. Install [Google clasp](https://github.com/google/clasp) and login,
  or `npx @google/clasp login` (will use the one installed in your node_modules).
2. Run `clasp create` so that a `.clasp.json` is created or create one with the desired projectID.
  Note: You shouldn't define a custom `rootDir`.
3. Update the project name and repo urls in `package.json`.
4. Write your code and `npm run build`.
5. Push with `npm run build && clasp push` or for convenience `npm run push`.

## Integrating with balenaCI

After cloning & scaffolding the repository
* Reset the package.json version to the desired one for the initial release, eg `0.1.0`.
* Delete the CHANGELOG.md & .versionbot folder.
* Set the appropriate .github/CODEOWNERS.
* Push the scaffolded project to `master`
* Create a new branch and open a PR for it.
* After balenaCI picks up the PR, go to the repository's settings page and add a
  `master` branch protection rule and mark the balenaCI checks as required.


## Resources

See: https://github.com/google/clasp

See: https://github.com/google/clasp/blob/master/docs/typescript.md

See: https://developers.google.com/apps-script/guides/libraries
