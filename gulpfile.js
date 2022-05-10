var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var rev = require('gulp-rev');
 
gulp.task('pack-css', function () {    
    return gulp.src([
            'public/css/index.css', 
            'public/css/responsive-3000.css', 
            'public/css/responsive-2460.css', 
            'public/css/responsive-1800.css', 
            'public/css/responsive-1560.css', 
            'public/css/responsive-1400.css', 
            'public/css/responsive-1200.css', 
            'public/css/responsive-1024.css', 
            'public/css/responsive-983.css', 
            'public/css/responsive-800.css', 
            'public/css/responsive-790.css', 
            'public/css/responsive-600.css', 
            'public/css/responsive-583.css', 
            'public/css/responsive-450.css', 
            'public/css/responsive-356.css', 
            'public/css/responsive-200.css'
        ])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(rev())
        .pipe(gulp.dest('public/build/css'))
        .pipe(rev.manifest('public/build/rev-manifest.json', {
            merge: true
        }))
        .pipe(gulp.dest(''));
});
 
//gulp.task('default', ['pack-css']);

gulp.task('default', gulp.series('server', 'watch'));
