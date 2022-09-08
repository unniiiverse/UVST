import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
    gulp,
    path,
    plugins
}

import { clear } from './gulp/tasks/clear.js';
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

const tasks = gulp.parallel(copy, html)
const dev = gulp.series(clear, tasks, gulp.parallel(watcher, server));

gulp.task('default', dev);