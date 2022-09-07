import gulp from 'gulp';
import { path } from './gulp/config/path.js';

global.app = {
    gulp,
    path
}

import { copy } from './gulp/tasks/copy.js';

gulp.task('default', copy);