import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        files: `${buildFolder}/`,
    },
    src: {
        files: `${srcFolder}/**/*.*`,
    },
    watch: {},
    clean: buildFolder,
    srcFolder,
    rootFolder
}