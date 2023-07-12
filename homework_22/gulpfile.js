const gulp = require("gulp");
const dartSass = require("sass");
const gulpSass = require("gulp-sass");
const concatCss = require("gulp-concat-css");
const uglify = require("gulp-uglify");
const minifyCSS = require("gulp-minify-css");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();

const sass = gulpSass(dartSass);

gulp.task("buildStyles", () => {
  return gulp
    .src("src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concatCss("./bundle.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("minifyJs", () => {
  return gulp
    .src("./src/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("processHTML", () => {
  return gulp.src("./index.html").pipe(gulp.dest("./dist"));
});

gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });

  gulp.watch("./index.html", gulp.series(["processHTML"]));

  gulp.watch("dist/index.html").on("change", browserSync.reload);
  gulp.watch("src/**/*.scss", gulp.series(["buildStyles"]));
  gulp.watch("./src/**/*.js", gulp.series(["minifyJs"]));
});
