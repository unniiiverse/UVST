import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    gulp,
    path,
    plugins
}

import { clear, setupClear, setupClearSecondStage, updateFonts } from './gulp/tasks/clear.js';
import { copy, useSrcBackup } from './gulp/tasks/copy.js';
import { html, htmlInclude } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js'
import { zip, backup } from './gulp/tasks/zip.js';

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, gulp.series(html, htmlInclude));
    gulp.watch(path.watch.scss, gulp.series(scss, htmlInclude));
    gulp.watch(path.watch.js, gulp.series(js, htmlInclude));
    gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(updateFonts, otfToTtf, ttfToWoff, fontsStyle);
const tasks = gulp.parallel(copy, gulp.series(html, htmlInclude), scss, js, images);

const init = gulp.series(backup, gulp.parallel(clear, setupClear), useSrcBackup, setupClearSecondStage);
const dev = gulp.series(clear, tasks, gulp.parallel(watcher, server));
const build = gulp.series(clear, tasks, fonts);
const createZip = gulp.series(build, zip);

export { init, dev, build, fonts, createZip };

gulp.task('default', dev);