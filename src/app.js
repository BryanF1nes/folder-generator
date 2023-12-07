const { app, BrowserWindow, ipcMain, dialog, Menu } = require('electron');
const { designFolderStructure, evalFolderStructure, permFolderStructure } = require('./folderStructures');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'images/rec_logo.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  ipcMain.handle('generateFolders', async (event, selection) => {
    try {
        const result = await dialog.showOpenDialog({ properties: ['openDirectory'] });

        if (!result.canceled && result.filePaths.length > 0) {
            const userPath = result.filePaths[0];

            if (selection === 'Design') {
                designFolderStructure(userPath);
                return { success: true, path: userPath };
            } else if (selection === 'Evaluation') {
                evalFolderStructure(userPath);
                return { success: true, path: userPath };
            } else if (selection === 'Permit') {
                permFolderStructure(userPath);
                return { success: true, path: userPath };
            } else {
                return { success: false, error: 'Invalid selection.' };
            }
        } else {
            return { success: false, error: 'User canceled folder selection.' };
        }
    } catch (err) {
        return { success: false, error: err.message };
    }
});


}

const createAboutWindow = () => {
  const aboutWindow = new BrowserWindow({
      title: 'File Manager | About',
      width: 550,
      height: 450,
      icon: path.join(__dirname, 'images/rec_logo.png'),
  })

  aboutWindow.loadFile(path.join(__dirname, 'about.html'))
}

const template = [
  {
      label: 'File',
      submenu: [
          {
              label: 'Quit',
              accelerator: 'CmdOrCtrl+Q',
              click: () => app.quit(),
          }
      ],
  },
  {
      label: 'Help',
      submenu: [
          {
              label: 'How to',
              accelerator: 'H',
              click: () => createAboutWindow(),
          }
      ]
  }
];
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// app.on('ready', createWindow);
app.whenReady().then(() => {
    
  createWindow();

  app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
          createWindow();
      }
  })
})


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
