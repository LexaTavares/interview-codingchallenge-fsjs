var gulp= require("gulp");
var sass= require("gulp-sass");
var browserify=require("gulp-browserify");
var browserSync=require("browser-sync").create();
var config={
  source:"./src/",
  dist:"./public",
};

var paths= {
  html:"**/*.html",
};

var sources={
  html:config.source + paths.html,
};

gulp.task('mover_html', ()=>{
  gulp.src(sources.html)
    .pipe(gulp.dest(config.dist));
});

gulp.task("default",()=>{
  browserSync.init({
    server:{
      baseDir:"./public"
    }
  });
  gulp.watch("./src/assets/scss/main.scss",["sass-watch"])
});
