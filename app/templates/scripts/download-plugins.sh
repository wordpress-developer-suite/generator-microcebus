echo 'Downloading plugins...';
cat ./plugins | xargs -n 1 curl -O;
echo 'Moving files...'
mv *.zip ./wp-content/plugins;
echo 'Unpacking plugin archive files..';
yes | unzip ./wp-content/plugins/\*.zip -d ./wp-content/plugins/;
echo 'Removing archives files...';
rm -rf ./wp-content/plugins/*.zip;
echo 'Done!';
