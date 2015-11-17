var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['*'],
    replaceString: /^gulp(-|\.)/,
});
var pngquant = require('imagemin-pngquant');
// development task
gulp.task('serve', ['sass', 'config'], function() {

    $.browserSync.init({
        notify: false,
        open: "external",
        port: 8000,
        server: {
            baseDir: ['app'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch("app/styles/scss/*.scss", ['sass']);
    gulp.watch(['app/**/*.html', 'app/scripts/**/*.js', 'app/styles/**/*.css']).on('change', $.browserSync.reload);
});

gulp.task('serve:r', function() {
    $.browserSync.init({
        notify: false,
        open: "external",
        port: 8000,
        server: {
            baseDir: ['dist'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/styles/scss/*.scss")
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest("app/styles"))
        .pipe($.browserSync.stream());
});

//release task
gulp.task('config', function() {
    var argv = require('yargs').argv
    var config = require('./config.json')
    return $.ngConstant({
            name: 'envconfig',
            constants: {
                'ENV': config[argv.env || 'local']
            },
            stream: true
        })
        .pipe(gulp.dest('app/js'));

});
gulp.task('htmlmin', function() {
    return gulp.src('dist/**/*.html')
        .pipe($.htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('imagemin', function() {
    return gulp.src('app/img/**/*')
        .pipe($.imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe($.rev())
        .pipe(gulp.dest('dist/img'))
        .pipe($.rev.manifest({
            base: 'revFile',
            path: "dist/rev-manifest.json",
            merge: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('useref', function() {
    var assets = $.useref.assets({
        searchPath: ['./', './app/']
    });

    return gulp.src('app/**/*.html')
        .pipe(assets)
        .pipe($.if('*.css', $.csso()))
        .pipe($.if('*.js', $.uglify({
            mangle: false,
            compress: {
                pure_funcs: ['console.log', 'console.info', 'console.error']
            }
        })))
        .pipe($.rev())
        .pipe(gulp.dest('dist'))
        .pipe($.rev.manifest({
            base: 'revFile',
            path: "dist/rev-manifest.json",
            merge: true
        }))
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
});

gulp.task('replaceCss', function() {
    var manifest = gulp.src("dist/rev-manifest.json");
    return gulp.src(['dist/styles/*.css'])
        .pipe($.revReplace({
            manifest: manifest
        }))
        .pipe(gulp.dest('dist/styles'))
});

gulp.task('replaceHtml', function() {
    var manifest = gulp.src("dist/rev-manifest.json");
    return gulp.src(['dist/**/*.html'])
        .pipe($.revReplace({
            manifest: manifest
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('import', function() {
    gulp.src(['app/email_template/**/*'])
        .pipe(gulp.dest('dist'))
});

gulp.task('del', function() {
    $.del.sync(['dist/**'], {
        force: true
    }, function(err, paths) {
        console.log('delete dist directory success');
    });
});

gulp.task('default', ['serve']);
gulp.task('release', function(callback) {
    $.runSequence('del', 'import', 'sass', 'config', 'useref', 'imagemin', 'replaceHtml', 'replaceCss', 'htmlmin', callback)
});
