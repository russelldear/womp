#!/bin/bash
cd public/images
> imageManifest.txt

for filename in *.jpg; do
    "$filename" >> imageManifest.txt
    identify -format '%w %h' $filename
done    