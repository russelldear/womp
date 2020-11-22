#!/bin/bash
cd public/images
> imageManifest.txt

for folder in */ ; do
    echo "$folder" >> imageManifest.txt
    pushd $folder
    > imageManifest.txt 
    for filename in *.jpg; do
        DIMS=$(identify -format '%w %h' $filename)
        echo "$filename $DIMS"
        echo "$filename $DIMS" >> imageManifest.txt
    done
    popd
done