::Thunder X NoAD
::Last updated on 2018/12/16
::http://www.carrotchou.blog
@echo off
title Ѹ��Xȥ���� �̻�&ж��

>NUL 2>&1 REG.exe query "HKU\S-1-5-19" || (
    ECHO SET UAC = CreateObject^("Shell.Application"^) > "%TEMP%\Getadmin.vbs"
    ECHO UAC.ShellExecute "%~f0", "%1", "", "runas", 1 >> "%TEMP%\Getadmin.vbs"
    "%TEMP%\Getadmin.vbs"
    DEL /f /q "%TEMP%\Getadmin.vbs" 2>NUL
    Exit /b
)

:menu
cls
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo ��ӭʹ��Ѹ��Xȥ�����̻��ű�
echo.
echo ��ѡ����Ŀ: 
echo.&echo ��1����װѸ��X
echo.&echo ��2��������ݷ�ʽ
echo.&echo ��3��ж��
echo.
set /p user_input=���������ֺ�Enter:
if %user_input% equ 1 goto Install
if %user_input% equ 2 goto Create
if %user_input% equ 3 goto Uninstall
echo.
echo �������, ��������������.
pause
goto menu

:Install 
taskkill /f /im Thunder.exe >nul 2>nul
echo.
pushd %~dp0
echo ��������Ѹ�׻����ļ�
rd/s/q "%tmp%\Xunlei" >nul 2>nul
rd/s/q "%tmp%\Thunder" >nul 2>nul
rd/s/q "%tmp%\ThunderLiveUD" >nul 2>nul
rd/s/q "%tmp%\Thunder Network" >nul 2>nul
rd/s/q "%AllUsersProfile%\Application Data\Thunder Network" >nul 2>nul
rd/s/q "%AllUsersProfile%\Application Data\Xunlei" >nul 2>nul
rd/s/q "%AllUsersProfile%\Xunlei" >nul 2>nul
rd/s/q "%AllUsersProfile%\Thunder Network" >nul 2>nul
rd/s/q "%AppData%\Thunder Network" >nul 2>nul
rd/s/q "%CommonProgramFiles%\Thunder Network" >nul 2>nul
rd/s/q "%CommonProgramFiles(x86)%\Thunder Network" >nul 2>nul
rd/s/q "%UserProfile%\Local Settings\Application Data\Thunder Network" 2>nul
rd/s/q "%UserProfile%\Local Settings\Application Data\Pusher" 2>nul
rd/s/q "%UserProfile%\AppData\LocalLow\Thunder Network" >nul 2>nul
rd/s/q "%UserProfile%\AppData\LocalLow\XueLei" >nul 2>nul
rd/s/q "%UserProfile%\My Documents\Thunder"2>nul
rd/s/q "%AllUsersProfile%\Application Data\Thunder Network"2>nul
del /q "Program\stat.dat" >NUL  2>NUL 
del /q "Program\latest_thunder_stat.xml" >NUL  2>NUL 
rd /s /q "Program\resources\bin\TBC\Data"2>NUL
If Exist "%PUBLIC%" rd /s/q "%PUBLIC%\Thunder Network" >nul 2>nul
If Exist "%PUBLIC%" rd /s/q "%PUBLIC%\Documents\Thunder Network" >nul 2>nul
del/f/q "%AppData%\Microsoft\Windows\Libraries\Ѹ������.library-ms" 2>nul
echo ����ע�ᰲװѸ��X...
md "%AllUsersProfile%\Application Data\Thunder Network\tp_common_info.dat"
if %errorlevel%==0 md  "%PUBLIC%\Thunder Network\tp_common_info.dat"
regsvr32 /s "BHO\UserAgent.dll" >nul 2>nul
regsvr32 /s "Program\np_tdieplat.dll" >nul 2>nul
regsvr32 /s "BHO\ThunderAgent10.1.0.1000.dll" >nul 2>nul
if exist "%WinDir%\SysWOW64" Regsvr32 /s "BHO\ThunderAgent649.5.62.2075.dll" >nul 2>nul
reg delete "HKCU\Software\Thunder Network" /f >nul 2>nul
md "%AllUsersProfile%\Application Data\Thunder Network\cid_store.dat"
md "%AllUsersProfile%\Application Data\Thunder Network\emule_upload_list.dat"
if %errorlevel%==0 (md "%PUBLIC%\Thunder Network\cid_store.dat"&md "%PUBLIC%\Thunder Network\emule_upload_list.dat")
if not exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Thunder Network\ThunderOem\thunder_backwnd" /v "dir" /d "%~dp0\" /f >nul 2>nul
if not exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Thunder Network\ThunderOem\thunder_backwnd" /v "Path" /d "%~dp0Program\Thunder.exe" /f >nul 2>nul
if not exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Thunder Network\ThunderOem\thunder_backwnd" /v "instdir" /d "%~dp0\" /f >nul 2>nul
if not exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Thunder Network\ThunderOem\thunder_backwnd" /v "Version" /d "10.1.7.262" /f >nul 2>nul
if exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Wow6432Node\Thunder Network\ThunderOem\thunder_backwnd" /v "dir" /d "%~dp0\" /f >nul 2>nul
if exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Wow6432Node\Thunder Network\ThunderOem\thunder_backwnd" /v "Path" /d "%~dp0Program\Thunder.exe" /f >nul 2>nul
if exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Wow6432Node\Thunder Network\ThunderOem\thunder_backwnd" /v "instdir" /d "%~dp0\" /f >nul 2>nul
if exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Wow6432Node\Thunder Network\ThunderOem\thunder_backwnd" /v "Version" /d "10.1.7.262" /f >nul 2>nul
reg add "HKCU\Software\Microsoft\Internet Explorer\MenuExt\ʹ��Ѹ������" /ve /d "%~dp0BHO\geturl.htm" /f >nul
reg add "HKCU\Software\Microsoft\Internet Explorer\MenuExt\ʹ��Ѹ������" /v "Contexts" /t REG_DWOrd /d "0x00000022" /f >nul
reg add "HKCU\Software\Microsoft\Internet Explorer\MenuExt\ʹ��Ѹ������ȫ������" /ve /d "%~dp0BHO\getAllurl.htm" /f >nul
reg add "HKCU\Software\Microsoft\Internet Explorer\MenuExt\ʹ��Ѹ������ȫ������" /v "Contexts" /t REG_DWOrd /d "0x000000f3" /f >nul
reg add "HKCR\Xunlei.Bittorrent.6\DefaultIcon" /ve /d "%~dp0Program\TorrentFile.ico" /F>nul
reg add "HKCR\Xunlei.Bittorrent.6\Shell\Open" /ve /d "ʹ��Ѹ�����ظ�BT�ļ�" /F>nul
reg add "HKCR\Xunlei.Bittorrent.6\Shell\Open\command" /ve /d "%~dp0Program\Thunder.exe %%1" /F>nul
reg add "HKCR\Xunlei.LSTFile.6\DefaultIcon" /ve /d "%~dp0Program\XLDownloadList.ico" /F>nul
reg add "HKCR\Xunlei.LSTFile.6\Shell\Open" /ve /d "ʹ��Ѹ�����ظ������б��ļ�" /F>nul
reg add "HKCR\Xunlei.LSTFile.6\Shell\Open\command" /ve /d "%~dp0Program\Thunder.exe %%1" /F>nul
reg add "HKCR\Xunlei.TDFile.6\DefaultIcon" /ve /d "%~dp0Program\XLTempFile.ico" /F>nul
reg add "HKCR\Xunlei.TDFile.6\Shell\Open" /ve /d "ʹ��Ѹ������δ����ļ�" /F>nul
reg add "HKCR\Xunlei.TDFile.6\Shell\Open\command" /ve /d "%~dp0Program\Thunder.exe %%1" /F>nul
reg add "HKCR\.xltd" /ve /d "Xunlei.TDFile.6" /F>nul
reg add "HKCR\.torrent" /ve /d "Xunlei.Bittorrent.6" /F>nul
reg add "HKCR\.downlist" /ve /d "Xunlei.LSTFile.6" /F>nul
reg Add "HKLM\Software\Google\Chrome\NativeMessagingHosts\com.xunlei.thunder" /f /ve /d "%~dp0Program\com.xunlei.thunder.json" >NUL 2>nul
if not exist "%WinDir%\SysWOW64" reg Add "HKLM\SOFTWARE\MozillaPlugins\@xunlei.com/npxunlei;version=1.0.0.2" /v "path" /d "%~dp0BHO\npxunlei.dll" /f >nul 2>nul
if exist "%WinDir%\SysWOW64" reg Add "HKLM\SOFTWARE\Wow6432Node\MozillaPlugins\@xunlei.com/npxunlei;version=1.0.0.2" /v "Path" /d "%~dp0BHO\npxunlei.dll" /f >nul 2>nul
mshta VBScript:Execute("Set a=CreateObject(""WScript.Shell""):Set b=a.CreateShortcut(a.SpecialFolders(""Desktop"") & ""\Ѹ��.lnk""):b.TargetPath=""%~dp0Program\Thunder.exe"":b.WorkingDirectory=""%~dp0Program"":b.Save:close")
echo ������ɣ���ʼʹ��Ѹ��X�ɣ�
echo.
pause
goto menu

:Create
echo.
mshta VBScript:Execute("Set a=CreateObject(""WScript.Shell""):Set b=a.CreateShortcut(a.SpecialFolders(""Desktop"") & ""\Ѹ��.lnk""):b.TargetPath=""%~dp0Program\Thunder.exe"":b.WorkingDirectory=""%~dp0Program"":b.Save:close")
echo ������ɣ���ʼʹ��Ѹ��X�ɣ�
echo.
pause
goto menu

:Uninstall
pushd %~dp0
taskkill /f /im Thunder.exe >nul 2>nul
echo.
echo  ����ж����...
rd/s/q "%tmp%\Xunlei" >nul 2>nul
rd/s/q "%tmp%\Thunder" >nul 2>nul
rd/s/q "%tmp%\ThunderLiveUD" >nul 2>nul
rd/s/q "%tmp%\Thunder Network" >nul 2>nul
rd/s/q "%AllUsersProfile%\Application Data\Thunder Network" >nul 2>nul
rd/s/q "%AllUsersProfile%\Application Data\Xunlei" >nul 2>nul
rd/s/q "%AllUsersProfile%\Xunlei" >nul 2>nul
rd/s/q "%AllUsersProfile%\Thunder Network" >nul 2>nul
rd/s/q "%AppData%\Thunder Network" >nul 2>nul
rd/s/q "%CommonProgramFiles%\Thunder Network" >nul 2>nul
rd/s/q "%CommonProgramFiles(x86)%\Thunder Network" >nul 2>nul
rd/s/q "%UserProfile%\Local Settings\Application Data\Thunder Network" 2>nul
rd/s/q "%UserProfile%\Local Settings\Application Data\Pusher" 2>nul
rd/s/q "%UserProfile%\AppData\LocalLow\Thunder Network" >nul 2>nul
rd/s/q "%UserProfile%\AppData\LocalLow\XueLei" >nul 2>nul
rd/s/q "%UserProfile%\My Documents\Thunder"2>nul
rd/s/q "%AllUsersProfile%\Application Data\Thunder Network"2>nul
del/f/q "%AppData%\Microsoft\Windows\Libraries\Ѹ������.library-ms" 2>nul
del /q "Program\stat.dat" >NUL  2>NUL 
del /q "Program\latest_thunder_stat.xml" >NUL  2>NUL 
rd /s /q "Program\resources\bin\TBC\Data"2>NUL
If Exist "%PUBLIC%" rd /s/q "%PUBLIC%\Thunder Network" >nul 2>nul
If Exist "%PUBLIC%" rd /s/q "%PUBLIC%\Documents\Thunder Network" >nul 2>nul
regsvr32 /s /u "Program\np_tdieplat.dll" >nul 2>nul
regsvr32 /s /u "BHO\ThunderAgent10.1.0.1000.dll" >nul 2>nul
if exist "%WinDir%\SysWOW64" Regsvr32 /s /u "BHO\ThunderAgent649.5.62.2075.dll" >nul 2>nul
reg delete "HKLM\Software\Thunder Network" /f >nul 2>nul
reg delete "HKLM\Software\Wow6432Node\Thunder Network" /f >nul 2>nul
reg delete "HKLM\Software\Google\Chrome\NativeMessagingHosts" /f >nul 2>nul
reg delete "HKLM\Software\Wow6432Node\Google\Chrome\NativeMessagingHosts" /f >nul 2>nul
reg delete "HKCR\Xunlei.Bittorrent.6" /f >nul 2>nul
reg delete "HKCR\Xunlei.LSTFile.6" /f >nul 2>nul
reg delete "HKCR\Xunlei.TDFile.6" /f >nul 2>nul
reg delete "HKCR\Xunlei.ThunderSkin.6" /f >nul 2>nul
reg delete "HKCR\xlapp" /f >nul 2>nul
reg delete "HKCR\xlb" /f >nul 2>nul
reg delete "HKCR\.xltd" /f >nul 2>nul
reg delete "HKCR\.torrent" /f >nul 2>nul
reg delete "HKCR\.downlist" /f >nul 2>nul
reg delete "HKCR\.xlb" /f >nul 2>nul
reg delete "HKCR\.thunderskin" /f >nul 2>nul
reg delete "HKLM\Software\Classes\Xunlei.Bittorrent.6" /f >nul 2>nul
reg delete "HKLM\Software\Classes\Xunlei.LSTFile.6" /f >nul 2>nul
reg delete "HKLM\Software\Classes\Xunlei.TDFile.6" /f >nul 2>nul
reg delete "HKLM\Software\Classes\Xunlei.ThunderSkin.6" /f >nul 2>nul
reg delete "HKLM\Software\Classes\Xunlei.XLB.6" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.xltd" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.torrent" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.xlb" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.downlist" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.thunderskin" /f >nul 2>nul
reg delete "HKCU\Software\Thunder Network" /f >nul 2>nul
reg delete "HKLM\Software\Google\Chrome\NativeMessagingHosts" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Internet Explorer\MenuExt\ʹ��Ѹ������" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Internet Explorer\MenuExt\ʹ��Ѹ������ȫ������" /f >nul 2>nul
reg delete "HKLM\SOFTWARE\MozillaPlugins\@xunlei.com/npxunlei;version=1.0.0.2" /f >nul 2>nul
reg delete "HKLM\SOFTWARE\Wow6432Node\MozillaPlugins\@xunlei.com/npxunlei;version=1.0.0.2" /f >nul 2>nul
del /f /q "%userprofile%"\Desktop\Ѹ��.lnk /f >nul 2>nul
del /f /q "%userprofile%"\����\Ѹ��.lnk /f >nul 2>nul
echo.
echo  ж�����.
echo.
pause
goto menu