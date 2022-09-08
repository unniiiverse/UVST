import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        files: `${buildFolder}/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
    },
    src: {
        files: `${srcFolder}/**/*.*`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
    },
    watch: {
        files: `${srcFolder}/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
    },
    clean: buildFolder,
    srcFolder,
    rootFolder
}