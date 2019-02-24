var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer'); 

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss') 
   .pipe(sass().on('error', sass.logError))
   .pipe(autoprefixer({
     browsers: ['last 3 versions']
  }))
   .pipe(gulp.dest('src/css'))
})

gulp.task('prefix', function() { 

    return gulp.src('src/scss/**/*.scss') 
        .pipe(gulp.dest('src/css/**/*.css')); 

}); 

gulp.task('watch', function(){
   gulp.watch('src/scss/**/*.scss', ['sass']);
  // Other watchers
})