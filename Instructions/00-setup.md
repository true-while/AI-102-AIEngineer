---
lab:
    title: 'Lab Environment Setup'
    module: 'Setup'
---

# Lab Environment Setup

These exercises are designed to be completed in a hosted lab environment. However, if you want to complete them on your own computer, you can do so by installing the following software. You may experience unexpected dialogs and behavior when using your own environment.

> **Note**: The instructions below are for a Windows 10 computer. You can also use Linux or MacOS.

### Base Operating System (Windows 10)

#### Windows 10

Install Windows 10 and apply all updates.

#### Edge

Install [Edge (Chromium)](https://microsoft.com/edge)

### .NET Core SDK

1. Download and install from https://dotnet.microsoft.com/download (download .NET Core SDK - not just the runtime)

### C++ Redistributable

1. Download and install the Visual C++ Redistributable (x64) from https://aka.ms/vs/16/release/vc_redist.x64.exe.

### Node.js

1. Download the latest LTS version from https://nodejs.org/en/download/ 
2. Install using the default options package globally

```
npm install -g dotenv path readline https fs
```
3. Run following command fore each NEW project to link globally installed packages from the folder of your project:

```
npm link dotenv path readline https fs
```
4. Install and build gyp by use following command. Also required install Visual C++ Build Environment: Visual Studio Build Tools (using "Visual C++ build tools" workload) or Visual Studio Community (using the "Desktop development with C++" workload). 

```
npm config set msvs_version 2019
npm install -g node-gyp
node-gyp install
```

5. Download and install SoX from http://sox.sourceforge.net/. Add folder to the path: C:\Program Files (x86)\sox-14-4-2

4. Download and install SOX for Windows http://sox.sourceforge.net/. Add location ('C:\Program Files (x86)\sox-14-4-2') to the Path system variables. 

### Python (and required packages)

1. Download version 3.8 from https://docs.conda.io/en/latest/miniconda.html 
2. Run setup to install - **Important**: Select the options to add Miniconda to the PATH variable and to register Miniconda as the default Python environment.
3. After installation, open the Anaconda prompt and enter the following commands to install packages: 

```
pip install flask requests python-dotenv pylint matplotlib pillow
pip install --upgrade numpy
```

### Azure CLI

1. Download from https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest 
2. Install using the default options

### Git

1. Download and install from https://git-scm.com/download.html, using the default options


### Visual Studio Code (and extensions)

1. Download from https://code.visualstudio.com/Download 
2. Install using the default options 
3. After installation, start Visual Studio Code and on the **Extensions** tab (CTRL+SHIFT+X), search for and install the following extensions from Microsoft:
    - Python
    - C#
    - Node.js
    - Azure Functions
    - PowerShell


### Bot Framework Emulator

Follow the instructions at https://github.com/Microsoft/BotFramework-Emulator/blob/master/README.md to download and install the latest stable version of the Bot Framework Emulator for your operating system.

### Bot Framework Composer

Install from https://docs.microsoft.com/en-us/composer/install-composer.
