#!/bin/sh
#############################################
# 将本脚本放在 PDA 项目根目录下，用于自动打包 apk
#
# 作者：彭俊 2019-11-08
#############################################

# 保存当前路径到变量mydir
# mydir="${0%/*}"
mydir=$(pwd)
# 显示经过了变量替换之后的命令行内容
# set -x
echo
echo ----------------------------------------
date
echo ----------------------------------------
npm run build

cd /Users/pengjun/vscode-workspace/android/sp3.0_New
rm -rf ./app/src/assets
cp -R $mydir/dist ./app/src/assets
echo
# read -p "请输入打包APK的版本号（不加V）:" VER
# echo
# sed -i '' 's/"X.XX"/"'$VER'"/g' ./app/src/main/java/cs/qingjing/spmes/activitys/HomeActivity.java
# ./gradlew assembleDebug
# sed -i '' 's/"'$VER'"/"X.XX"/g' ./app/src/main/java/cs/qingjing/spmes/activitys/HomeActivity.java
# mv ./app/build/outputs/apk/debug/app-debug.apk /Users/pengjun/Downloads/V$VER.apk
cd $mydir
