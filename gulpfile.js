import gulp from 'gulp';
import { path } from './gulp/config/path.js';

global.app = {
    gulp,
    path
}

import { copy } from './gulp/tasks/copy.js';
import { clear } from './gulp/tasks/clear.js';
import { html } from './gulp/tasks/html.js';

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

const tasks = gulp.parallel(copy, html)
const dev = gulp.series(clear, tasks, watcher);

gulp.task('default', dev);