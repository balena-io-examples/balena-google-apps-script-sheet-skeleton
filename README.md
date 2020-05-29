# balena-google-apps-script-sheet-skeleton
Skeleton template for google apps script sheets projects.

## :package: Getting Started
0. Install [Google clasp](https://github.com/google/clasp) and login.
1. Clone this repository & run `npm install`.
2. Run `clasp create` so that a `.clasp.json` is created or create one with the desired projectID.
3. Update the project name and repo urls in `package.json`.
4. Write your code and `npm run build`.
5. Push with `npm run build && clasp push` or for convenience `npm run push`.

## Integrating with balenaCI

After cloning & scaffolding the repository
* Reset the package.json version to something like `0.1.0`.
* Update the CHANGELOG.md to also include just that entry.
* Create a tag matching the version like `v0.1.0`  and push it.

After opening the initial code PR, go to the repository's settings page and add a
`master` branch protection rule where the appropriate balenaCI checks are marked
as required.


## Resources

See: https://github.com/google/clasp

See: https://github.com/google/clasp/blob/master/docs/typescript.md

See: https://developers.google.com/apps-script/guides/libraries