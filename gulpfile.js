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

import { clear } from './gulp/tasks/clear.js';
import { copy } from './gulp/tasks/copy.js';
import { html, htmlInclude } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js'
import { svgSprive } from './gulp/tasks/svgSprive.js';
import { zip } from './gulp/tasks/zip.js';
import { backup } from './gulp/tasks/zip.js';

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, gulp.series(html, htmlInclude));
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const tasks = gulp.parallel(copy, gulp.series(html, htmlInclude), scss, js, images);

const setup = gulp.series(backup, gulp.parallel(clear));
const dev = gulp.series(clear, tasks, gulp.parallel(watcher, server));
const build = gulp.series(clear, tasks);
const createZip = gulp.series(clear, tasks, zip);

export { setup };
export { dev };
export { build };
export { fonts };
export { svgSprive }; // svg
export { createZip }; // zip

gulp.task('default', dev);