const { app, BrowserWindow } = require("electron");
const path = require("node:path");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const resourcePath =
  !process.env.NODE_ENV || process.env.NODE_ENV === "production"
    ? process.resourcesPath // Live Mode
    : __dirname; // Dev Mode

const pathToIcon = path.join(resourcePath, "assets/desktop.png");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: process.platform == "win32" ? 880 : 780,
    height: process.platform == "win32" ? 680 : 600,
    webPreferences: {
      nodeIntegration: false,
      icon: pathToIcon,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.resizable = false; // not resizable window
  mainWindow.setMenu(null); // Remove the above menu
};

app.whenReady().then(() => {
  createWindow();

  // Customize protocol to handle static resource.
  //  session.defaultSession.protocol.registerFileProtocol('static', (request, callback) => {
  //   const fileUrl = request.url.replace('static://', '');
  //   const filePath = path.join(app.getAppPath(), '.webpack/renderer', fileUrl);
  //   callback(filePath);
  // });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
