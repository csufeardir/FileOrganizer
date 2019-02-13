var fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Location to Organize:`, (locale) => {
    Organize(locale);
    readline.close();

});

function Organize(locale) {

    var [exenum, compnum, readable, imagenum, vidnum, pronum, audionum, errnum] = [0, 0, 0, 0, 0, 0, 0, 0];

    fs.readdir(locale, (err, files) => {

        files.forEach(file => {
            var oldPath = locale + '\\' + file;

            if (file.endsWith('.exe') || file.endsWith('.apk') || file.endsWith('.bat') || file.endsWith('.bin') || file.endsWith('.jar') || file.endsWith('.com')
                || file.endsWith('.gadget') || file.endsWith('.bat') || file.endsWith('.wsf')) {
                if (!fs.existsSync(locale + '\\Executables')) {
                    fs.mkdirSync(locale + '\\Executables');
                }
                var newPath = locale + '\\' + 'Executables' + '\\' + file;
                exenum += 1;
            }
            else if (file.endsWith('.rar') || file.endsWith('.zip') || file.endsWith('.tgz') || file.endsWith('.pkg') || file.endsWith('.7z') || file.endsWith('.tar.gz')) {
                if (!fs.existsSync(locale + '\\Compressed')) {
                    fs.mkdirSync(locale + '\\Compressed');
                }
                var newPath = locale + '\\' + 'Compressed' + '\\' + file;
                compnum += 1;
            }
            else if (file.endsWith('.txt') || file.endsWith('.pdf') || file.endsWith('.docx') || file.endsWith('.doc') || file.endsWith('.rtf') || file.endsWith('.odt') ||
                file.endsWith('.xls')) {
                if (!fs.existsSync(locale + '\\Readable')) {
                    fs.mkdirSync(locale + '\\Readable');
                }
                var newPath = locale + '\\' + 'Readable' + '\\' + file;
                readable += 1;
            }
            else if (file.endsWith('.ai') || file.endsWith('.bmp') || file.endsWith('.gif') || file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png') ||
                file.endsWith('.psd') || file.endsWith('.tiff')) {
                if (!fs.existsSync(locale + '\\Images')) {
                    fs.mkdirSync(locale + '\\Images');
                }
                var newPath = locale + '\\' + 'Images' + '\\' + file;
                imagenum += 1;
            }
            else if (file.endsWith('.avi') || file.endsWith('.flv') || file.endsWith('.mkv') || file.endsWith('.mov') || file.endsWith('.mpg') || file.endsWith('.mpeg') ||
                file.endsWith('.rm') || file.endsWith('.wmv') || file.endsWith('.3gp') || file.endsWith('.3g2') || file.endsWith('.h264') || file.endsWith('.m4v')) {
                if (!fs.existsSync(locale + '\\Videos')) {
                    fs.mkdirSync(locale + '\\Videos');
                }
                var newPath = locale + '\\' + 'Videos' + '\\' + file;
                vidnum += 1;
            }
            else if (file.endsWith('.c') || file.endsWith('.class') || file.endsWith('.cpp') || file.endsWith('.cs') || file.endsWith('.h') || file.endsWith('.java') ||
                file.endsWith('.sh') || file.endsWith('.swift') || file.endsWith('.vb') || file.endsWith('.js') || file.endsWith('.py') || file.endsWith('.asp')
                || file.endsWith('.aspx') || file.endsWith('.pl')) {
                if (!fs.existsSync(locale + '\\Programming')) {
                    fs.mkdirSync(locale + '\\Programming');
                }
                var newPath = locale + '\\' + 'Programming' + '\\' + file;
                pronum += 1;
            }
            else if (file.endsWith('.aif') || file.endsWith('.cda') || file.endsWith('.mid') || file.endsWith('.midi') || file.endsWith('.mp3') || file.endsWith('.mpa') ||
                file.endsWith('.ogg') || file.endsWith('.wav') || file.endsWith('.wma') || file.endsWith('.wpl')) {
                if (!fs.existsSync(locale + '\\Audio')) {
                    fs.mkdirSync(locale + '\\Audio');
                }
                var newPath = locale + '\\' + 'Audio' + '\\' + file;
                audionum += 1;

            } else var newPath = oldPath;

            fs.rename(oldPath, newPath, function (err) {
                if (err) {
                    errnum += 1;
                }
            })
        });

        console.log(exenum + ' Executables found and organized \n' + compnum + ' Compressed found and organized \n' +
            readable + ' Readables found and organized \n' + imagenum + ' Images found and organized \n' + vidnum + ' Videos found and organized \n' +
            pronum + ' Programming files found and organized \n' + audionum + ' Audio files found and organized \n');
        console.log(errnum + ' files in this direction are not permitted to move');

    })
}

