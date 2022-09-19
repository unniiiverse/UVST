import { deleteAsync } from 'del';
import gulpZip from 'gulp-zip';

export const zip = () => {
    deleteAsync([`./${app.path.rootFolder}.zip`]);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(gulpZip(`${app.path.rootFolder}.zip`))
    .pipe(app.gulp.dest('./'));
}

export const backup = () => {
    deleteAsync([`./backup/projectBackup.zip`]);
    return app.gulp.src(`${app.path.srcFolder}/**/*.*`, {})
        .pipe(gulpZip(`projectBackup.zip`))
        .pipe(app.gulp.dest('./backup/'));
}