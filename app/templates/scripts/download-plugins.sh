echo 'Downloading plugins...';
cat ./plugins | xargs -n 1 curl -O;
echo 'Moving files...'
mv *.zip ./wp-content/plugins;
echo 'Unpacking plugin archive files..';
find ./wp-content/plugins -depth -name '*.zip' -exec unzip {} -d ./wp-content/plugins/ \;
echo 'Removing archives files...';
rm -rf ./wp-content/plugins/*.zip;
echo 'Done!';
