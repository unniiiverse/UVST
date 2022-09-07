import gulp from 'gulp';
import { path } from './gulp/config/path.js';

global.app = {
    gulp,
    path
}

import { copy } from './gulp/tasks/copy.js';
import { clear } from './gulp/tasks/clear.js';

function watcher() {
    gulp.watch(path.watch.files, copy);
}

const dev = gulp.series(clear, copy, watcher);

gulp.task('default', dev);