import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        files: `${buildFolder}/`,
        html: `${buildFolder}/`,
    },
    src: {
        files: `${srcFolder}/**/*.*`,
        html: `${srcFolder}/*.html`,
    },
    watch: {
        files: `${srcFolder}/**/*.*`,
        html: `${srcFolder}/**/*.html`,
    },
    clean: buildFolder,
    srcFolder,
    rootFolder
}