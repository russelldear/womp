#!/bin/bash
cd public/images
> imageManifest.txt

for filename in *.jpg; do
    dimensions = identify -format '%w %h' $filename
    echo "$filename" + " " + $dimensions >> imageManifest.txt
done    