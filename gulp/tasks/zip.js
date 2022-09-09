import { deleteAsync } from 'del';
import gulpZip from 'gulp-zip';

export const zip = () => {
    deleteAsync([`./${app.path.rootFolder}.zip`]);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(gulpZip(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest('./'));
}