import gulp from 'gulp';
import { path } from './gulp/config/path.js';

global.app = {
    gulp,
    path
}

import { copy } from './gulp/tasks/copy.js';

function watcher() {
    gulp.watch(path.watch.files, copy);
}

const dev = gulp.series(copy, watcher);

gulp.task('default', dev);