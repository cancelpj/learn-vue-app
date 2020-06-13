###
 # @Author: 彭俊
 # @Date: 2019-11-08 14:46:10
 # @LastEditTime: 2020-06-13 12:30:16
 # @LastEditors: 彭俊
 # @Description: 将本脚本放在 PDA 项目根目录下，用于自动打包 apk（本地需要有 Android Studio 打包环境）
 # @FilePath: /SP_WEB_iview/Users/pengjun/vscode-workspace/vue/learn-vue-app/apkpack.sh
### 
#!/bin/sh

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

cd /Users/pengjun/vscode-workspace/android/Android_H5_SP3
rm -rf ./app/src/assets
cp -R $mydir/dist ./app/src/assets
echo
read -p "请输入打包APK的版本号（不加V）:" VER
echo
sed -i '' 's/"XXXXX"/"'$VER'"/g' ./app/src/main/java/com/spmes/h5app/activitys/HomeActivity.java
./gradlew assembleDebug
sed -i '' 's/"'$VER'"/"XXXXX"/g' ./app/src/main/java/com/spmes/h5app/activitys/HomeActivity.java
mv ./app/build/outputs/apk/debug/app-debug.apk /Users/pengjun/Downloads/V$VER.apk
cd $mydir
