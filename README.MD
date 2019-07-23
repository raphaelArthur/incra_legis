Produção:

        > keytool -genkey -v -keystore incralegis-unb.jks -keyalg RSA -keysize 2048 -validity 10000 -alias incralegis-unb
navegar para a pasta da apk e executar:
        > jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore incralegis-unb.jks app-release-unsigned.apk incralegis-unb
        > zipalign -v 4 app-release-unsigned.apk incralegis-unb.apk
