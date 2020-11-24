#!/bin/bash
cd public/images
> imageManifest.txt

for folder in */ ; do
    pushd "$folder"
        for filename in *.jpg; do
            DIMS=$(identify -format '%w %h' $filename)
            echo "$folder$filename $DIMS"$'\r'$'\n'
            FILES+="$folder$filename $DIMS"$'\r'$'\n'
        done
    popd
done

echo "$FILES" >> imageManifest.txt